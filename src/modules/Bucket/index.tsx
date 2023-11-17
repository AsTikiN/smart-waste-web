import { useRef, useState, useEffect, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Container,
  Stack,
  MenuItem,
  Typography,
  Grid,
  IconButton,
  styled,
  SelectChangeEvent,
  Select,
} from "@mui/material";
import FlipIcon from "@mui/icons-material/Flip";
import BucketItem from "./components/BucketItem";
import SwipeableEdgeDrawer from "components/BottomSheets";
import Counter from "components/Counter";
import { useDispatch } from "react-redux";
import { addToBucket, getAllBucketItemsServer, setBucket } from "redux/actions/bucketActions";
import { BucketItem as IBucketItem } from "redux/types/types";
import { useSelector } from "react-redux";
import { getBucket, getBucketItemVariants } from "redux/reducers/bucketReducer";
import { toast } from "react-toastify";
import { scanImageServer } from "redux/actions/scanActions";
import { getScanData } from "redux/reducers/scanReducer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getCategoriesCoordinatesServer } from "redux/actions/coordinatesActions";

const Bucket = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [material, setMaterial] = useState("");
  const [file, setFile] = useState("");
  const [drawerCounter, setDrawerCounter] = useState(0);
  const [bucketItems, setBucketItems] = useState<IBucketItem[]>([]);
  console.log("bucketItems", bucketItems);
  const bucket = useSelector(getBucket);
  const scanData = useSelector(getScanData);
  const bucketItemVariants = useSelector(getBucketItemVariants);

  const resetDrawer = () => {
    setMaterial("");
    setDrawerCounter(0);
  };

  const handleSelectMaterial = (e: SelectChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setMaterial(value);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  const handleTakePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleAddToBucket = () => {
    const isMaterialAdded = bucketItems.find((item) => item.name === material);

    if (isMaterialAdded) {
      toast.error("This item already added. You can change counter in the bucket");
      return;
    }

    if (!material) {
      toast.error("No item selected. Scan or enter it");
      return;
    }

    if (!drawerCounter) {
      toast.error("You must add 1 or more items per time");
      return;
    }

    dispatch(
      addToBucket({
        bucketItem: {
          id: uuid(),
          name: material,
          count: drawerCounter,
        },
      }),
    );
    setIsOpen(false);
    resetDrawer();
  };

  const handleChangeCounter = (id: string | number) => (count: number) => {
    if (!count) {
      const newBucket = bucketItems.filter((item) => item.id !== id);
      dispatch(setBucket({ bucket: newBucket }));
      return;
    }

    const newBucket = bucketItems.map((item) => (item.id === id ? { ...item, count } : item));
    dispatch(setBucket({ bucket: newBucket }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      dispatch(scanImageServer({ Photo: file }));
    }
  };

  const handleShowPoints = () => {
    if (!bucketItems || !bucketItems.length) {
      toast.error("You can't find points for empty bucket");
    }
    dispatch(getCategoriesCoordinatesServer(bucketItems.map((bucket) => bucket.name)));
  };

  useEffect(() => {
    setBucketItems(bucket);
  }, [bucket]);

  useEffect(() => {
    if (!scanData) return;
    const material = scanData.items[0]?.name;
    if (!material) {
      toast.error("Try another side");
      return;
    }
    setMaterial(material);
  }, [scanData]);

  return (
    <Box sx={{ padding: "60px 0 20px" }} height="calc(100vh - 56px)">
      <Container sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%" }}>
          <Typography variant="h4">Bucket</Typography>
          <Stack mt="20px" spacing={2} sx={{ overflow: "scroll" }}>
            {bucketItems.map((item) => (
              <BucketItem key={item.id} count={item.count} changeCounter={handleChangeCounter(item.id)}>
                {item.name}
              </BucketItem>
            ))}
            {!bucketItems.length && (
              <Stack sx={{ alignItems: "center" }}>
                <DeleteForeverIcon sx={{ width: "120px", height: "120px" }} />
                <Typography variant="h4">No data</Typography>
              </Stack>
            )}
          </Stack>
          <Stack mt="20px" spacing={2} sx={{ flex: 1, justifyContent: "flex-end" }}>
            <Button size="large" fullWidth variant="outlined" onClick={() => setIsOpen(true)}>
              Add an item
            </Button>
            <Button size="large" fullWidth variant="contained" onClick={handleShowPoints}>
              Find the nearest recycle point
            </Button>
          </Stack>
        </Stack>
      </Container>

      <SwipeableEdgeDrawer open={isOpen} setOpen={setIsOpen}>
        <Grid container spacing={1} padding="20px 30px">
          <Grid xs={10} sx={{ position: "relative" }}>
            {!material && <Typography sx={{ position: "absolute", top: "15px", left: "15px" }}>Material</Typography>}
            <Select fullWidth value={material as any} onChange={handleSelectMaterial}>
              {bucketItemVariants.map((item) => (
                <MenuItem value={item.categories[0].slug} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton color="primary" onClick={handleTakePhotoClick}>
              <FlipIcon />
              <Input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                onChange={handleInputChange}
                value={file}
              />
            </IconButton>
          </Grid>
          <Grid mt="20px">
            <Counter count={drawerCounter} changeCounter={(count: number) => setDrawerCounter(count)} />
          </Grid>
          <Grid xs={12}>
            <Stack spacing={2} mt="40px">
              <Button fullWidth size="large" variant="outlined" onClick={handleAddToBucket}>
                Add to bucket
              </Button>
              <Button fullWidth size="large" color="error" variant="contained" onClick={handleCloseDrawer}>
                Cancel
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </SwipeableEdgeDrawer>
    </Box>
  );
};

const Input = styled("input")`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
`;

export default Bucket;

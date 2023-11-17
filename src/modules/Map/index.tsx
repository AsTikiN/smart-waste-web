import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer, InfoWindow } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBinsCoordinates } from "redux/reducers/coordinatesReducer";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { BinsCoordinate } from "redux/types/types";
import BrandLoader from "components/Loader/BrandLoader";
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import SwipeableEdgeDrawer from "components/BottomSheets";
import { isUserNearPoint } from "lib/isUserNearPoint";
import { dropBucketServer } from "redux/actions/bucketActions";
import { getBucket } from "redux/reducers/bucketReducer";
import { toast } from "react-toastify";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapConfig = {
  defaultZoom: 13,
  bootstrapURLKeys: {
    key: "AIzaSyDuBBVGj6vOXKk2NGmBNfKIdrtD75iW3bU",
  },
  options: { streetViewControl: false },
};

const defaultCenter = {
  lat: 48.450001,
  lng: 34.983334,
};

const Map = () => {
  const dispatch = useDispatch();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapConfig.bootstrapURLKeys.key,
  });

  const data = useSelector(getBinsCoordinates);
  const bucket = useSelector(getBucket);

  const [mapOptions, setMapOptions] = useState({
    center: defaultCenter,
    zoom: 10,
  });
  const [activeMarker, setActiveMarker] = useState<BinsCoordinate | null>(null);
  const [showActiveMarker, setShowActiveMarker] = useState<boolean>(false);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const isUserLocationKnown = !(userLocation.lat + userLocation.lng);
  const isCanDrop =
    !activeMarker ||
    (activeMarker && isUserNearPoint(userLocation, { lat: activeMarker.lat, lng: activeMarker.lng }, 50));

  const getPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  const handleMarkerClick = (marker: BinsCoordinate) => (e: any) => {
    console.log(e);
    setActiveMarker(marker);
    setShowActiveMarker(true);
  };

  const handleRemoveActiveMarker = () => {
    setActiveMarker(null);
  };

  const handleCloseModal = () => {
    if (!bucket.length) {
      toast.error("Your bucket is empty");
      return;
    }

    dispatch(dropBucketServer({ items: bucket.map((el) => ({ id: el.id as number, count: el.count })) }));
    setShowActiveMarker(false);
  };

  const handleGetPermisson = async () => {
    getPermission();
  };

  const handleOpenMap = () => {
    if (!activeMarker) return;
    const url = `http://maps.google.com/maps?f=d&daddr=${activeMarker.lat} ${activeMarker.lng}`;
    window.open(url, "_blank");
  };

  const onLoad = React.useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    // getPermission();
  }, []);

  if (!isLoaded) return <BrandLoader show={true} />;
  console.log("isUserLocationKnown", isUserLocationKnown);
  return (
    <div className="map-wrapper" style={{ width: "100%", height: "100vh" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapConfig.options}
      >
        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}
          styles={[
            {
              textColor: "white",
              url: "https://i.ibb.co/8mrx6J8/Group-1.png",
              height: 40,
              width: 40,
            },
          ]}
        >
          {(clusterer) => {
            return (
              <>
                {data.map((marker, index) => (
                  <>
                    <Marker
                      key={index}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      clusterer={clusterer}
                      onClick={handleMarkerClick(marker)}
                      icon={{
                        url: "https://i.ibb.co/8mrx6J8/Group-1.png",
                        scaledSize: new window.google.maps.Size(40, 40),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(20, 20),
                      }}
                    ></Marker>
                  </>
                ))}
              </>
            );
          }}
        </MarkerClusterer>
        {isUserLocationKnown && (
          <Marker
            position={{ lat: userLocation.lat, lng: userLocation.lng }}
            icon={{
              url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png",
              scaledSize: new window.google.maps.Size(20, 20),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
          ></Marker>
        )}
      </GoogleMap>
      <SwipeableEdgeDrawer open={showActiveMarker} setOpen={setShowActiveMarker}>
        <Container>
          <Typography variant="h5" fontWeight={700}>
            {activeMarker?.name}
          </Typography>
          <Typography mt="10px" variant="h6" fontWeight={500}>
            {activeMarker?.address}
          </Typography>
          {activeMarker?.categories.map((category) => category.emoji)}
          {!isUserLocationKnown && (
            <Typography mt="5px" onClick={handleGetPermisson}>
              We don't have location permission.
              <Box
                sx={{
                  display: "inline",
                  color: "#6B69F6",
                  textDecoration: "underline",
                }}
              >
                Give a permission
              </Box>
            </Typography>
          )}
          <Stack spacing={2} mt="20px">
            <Button size="large" fullWidth variant="outlined" onClick={handleOpenMap}>
              Go
            </Button>
            <Button disabled={!isCanDrop} size="large" fullWidth variant="contained" onClick={handleCloseModal}>
              Clear bucket
            </Button>
          </Stack>
        </Container>
      </SwipeableEdgeDrawer>
    </div>
  );
};

export default Map;

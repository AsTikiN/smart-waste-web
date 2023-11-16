import React, { useState, useRef, ChangeEvent, FC } from "react";
import { Box, Button, Container, Stack, styled } from "@mui/material";

const Camera: FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleTakePhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container sx={{ maxWidth: "600px" }}>
      <Box sx={{ minHeight: "calc(100vh - 56px)" }}>
        <Box
          sx={{
            width: "400px",
            maxWidth: "100%",
            height: "400px",
            background: "#f4f4f4",
            borderRadius: "10px",
            position: "relative",
            mt: "20px",
          }}
        >
          {selectedFile && (
            <img
              src={selectedFile}
              alt="Preview"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
            />
          )}
          <Input type="file" accept="image/*" capture="environment" onChange={handleFileChange} ref={fileInputRef} />
        </Box>
        <Stack spacing={3} mt={"40px"}>
          <Button variant="contained" onClick={handleTakePhotoClick}>
            Take a Photo
          </Button>
          <Button variant="contained">Send Photo</Button>
        </Stack>
      </Box>
    </Container>
  );
};

const Input = styled("input")`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Camera;

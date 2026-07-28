import React, { useState } from "react";

import { Box, Button } from "@mui/material";

import { useUploadImageMutation } from "../../app/api/api";

const MultiImageUploader = ({ value = [], onChange, folder = "products" }) => {
  const [preview, setPreview] = useState(value);

  const [uploadImage, { isLoading, isSuccess, isError, error }] =
    useUploadImageMutation();

  const handleChange = async (e) => {
    const files = Array.from(e.target.files);

    const urls = [];

    for (const file of files) {
      const formData = new FormData();

      formData.append("image", file);

      formData.append("folder", folder);

      const res = await uploadImage(formData).unwrap();

      urls.push(res.url);
    }

    const newImages = [...value, ...urls];

    onChange(newImages);

    setPreview(newImages);
  };

  return (
    <Box>
      <Button variant="outlined" component="label">
        {isLoading
          ? "Загрузка..."
          : isSuccess
            ? "Загружено"
            : isError
              ? "Ошибка"
              : "Добавить фото"}
        <input
          hidden
          multiple
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </Button>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
        }}
      >
        {preview.map((img) => (
          <Box
            key={img}
            component="img"
            src={img}
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MultiImageUploader;

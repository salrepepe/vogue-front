import React, { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";

import { useUploadImageMutation } from "../../app/api/api";

const ImageUploader = ({ value, onChange, folder = "images", txt }) => {
  const [preview, setPreview] = useState(value || "");

  const [uploadImage, { isLoading, isSuccess, isError, error }] =
    useUploadImageMutation();

  useEffect(() => {
    setPreview(value || "");
  }, [value]);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // локальный preview

    const localUrl = URL.createObjectURL(file);

    setPreview(localUrl);

    const formData = new FormData();

    formData.append("image", file);

    formData.append("folder", folder);

    try {
      const response = await uploadImage(formData).unwrap();

      // сохраняем URL из R2

      onChange(response.url);

      // меняем preview на настоящий URL

      setPreview(response.url);

      URL.revokeObjectURL(localUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="outlined" fullWidth component="label">
        {isLoading
          ? "Загрузка..."
          : isSuccess
            ? "Загружено"
            : isError
              ? "Ошибка"
              : `Выбрать ${txt}`}
        <input hidden type="file" accept="image/*" onChange={handleChange} />
      </Button>

      {preview && (
        <Box
          component="img"
          src={preview}
          sx={{
            width: 120,

            height: 120,

            objectFit: "contain",

            border: "1px solid #ddd",

            borderRadius: 2,
          }}
        />
      )}
    </>
  );
};

export default ImageUploader;

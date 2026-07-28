import React, { useState } from "react";

import { Box, Button, TextField, Typography, IconButton } from "@mui/material";

import {
  useGetBrandsQuery,
  useCreateBrandMutation,
  useDeleteBrandMutation,
} from "../../app/api/api";
import ImageUploader from "../components/ImageUploader";

const Brands = () => {
  const [name, setName] = useState("");

  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState(null);

  const { data: brands = [], isLoading } = useGetBrandsQuery();

  const [createBrand] = useCreateBrandMutation();
  const [deleteBrand] = useDeleteBrandMutation();

  const addBrand = async () => {
    try {
      await createBrand({
        name,
        logo,
        banner,
      }).unwrap();

      setName("");

      setLogo(null);

      setBanner(null);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return "Загрузка...";

  return (
    <Box>
      <Typography variant="h3">Бренды</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
          alignItems: "start",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <TextField
          fullWidth
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ImageUploader
          value={logo}
          txt="Логотип"
          onChange={setLogo}
          folder="brands"
        />
        {/* <Button component="label" variant="outlined">
          Логотип
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </Button> */}
        <ImageUploader
          value={banner}
          txt="Баннер"
          onChange={setBanner}
          folder="brands/banners"
        />

        <Button
          fullWidth
          variant="contained"
          onClick={addBrand}
          disabled={!name.trim()}
        >
          Добавить
        </Button>
      </Box>

      {brands.map((brand) => (
        <Box
          key={brand.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            p: 2,
            border: "1px solid #ddd",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {brand.logo && (
              <Box
                component="img"
                src={brand.logo}
                sx={{
                  width: 50,
                  height: 50,
                  objectFit: "contain",
                }}
              />
            )}

            <Typography>{brand.name}</Typography>
          </Box>

          <IconButton onClick={() => deleteBrand(brand.id)}>🗑</IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Brands;

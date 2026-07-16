import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    
      <Box
        sx={{
          p: "10px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          '& a' :{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
       
            width: "100%",
          },
          '& img' :{ borderRadius: "10px", objectFit: "cover" },
        }}
      >
        <Link to={`/catalog/${item.slug}/${item.id}`}><img src={item?.images[0]} width="100%" height="280px" alt="" /></Link>
        <Link to={`/catalog/${item.slug}/${item.id}`}> <Typography sx={{ mt: 3 }} variant="h4">
          {item?.name}
        </Typography>
        <Typography sx={{ mb: 4 }} sx={{ color: "#777" }} variant="h5">
          {item?.category?.name}
        </Typography>
        <Typography sx={{ mb: 4, fontSize: 20 }}>{item?.price}$</Typography></Link>
       
        <Button fullWidth sx={{p:1, fontSize: 17}} size="small" variant="outlined">
          добавить в корзину
        </Button>
      </Box>
    
  );
};

export default Card;

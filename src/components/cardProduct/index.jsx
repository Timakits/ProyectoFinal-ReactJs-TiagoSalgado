import * as React from "react";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardProduct = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 320, backgroundColor: "#1B1E1F" }}>
      <CardMedia
        component="img"
        alt={data.brand}
        height="250"
        image={data.img}
      />
      <CardContent sx={{ color: "white" }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.model} {data.brand}
        </Typography>
        <Typography variant="body2">{data.Price}$</Typography>
      </CardContent>
    </Card>
  );
};

export default CardProduct;

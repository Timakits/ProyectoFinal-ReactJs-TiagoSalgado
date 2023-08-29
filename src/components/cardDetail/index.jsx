import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

const CardDetail = ({ data }) => {
  
  
 const [counter, setCounter] = useState(0)
 
  const onClickCounterM = () => {
    if(counter != data.cant){
      setCounter(counter + 1)
    }else{
      alert("No hay mas stock disponible")
    }
  }

  const onClickCounterL = () => {
    if(counter != 0){
      setCounter(counter - 1)
    }
  } 

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }} className="cardContent">
          <Box>
            <Typography component="div" variant="h5">
              <h2 className="Name">
                {data.model} {data.brand}
              </h2>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ paddingLeft: "15px" }}
            >
              Color de armazon: {data.FrameColor}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ paddingLeft: "15px" }}
            >
              Color de lente: {data.LensColor}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ paddingLeft: "15px", color:"bisque" }}
            >
              Cantidad restante: {data.cant}
            </Typography>
          </Box>
            <div className="compra">
              <h2 className="Precio">{data.Price}$</h2>
              <div className="btns">
              <Button variant="outlined" color="error" className="minus" onClick={onClickCounterL}>
                -
              </Button>
              <h6 className="contador">{counter}</h6>
              <Button variant="contained" color="success" className="more" onClick={onClickCounterM}> 
                +
              </Button>
              <Button variant="outlined" sx={{marginLeft: 10, maxWidth: 100}}>
                Agregar al carrito <i class="fa-solid fa-cart-shopping"></i>
              </Button>
              </div>
            </div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        image={data.img}
        alt={data.brand}
        className="cardMedia"
      />
    </Card>
  );
};

export default CardDetail;

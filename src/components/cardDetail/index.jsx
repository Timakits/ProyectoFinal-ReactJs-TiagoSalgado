import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const CardDetail = ({ data }) => {
  const [counter, setCounter] = useState(1);

  
  const {addItem} = useContext(CartContext) 
  const id = data.id
  const model = data.model
  const brand = data.brand
  const price = data.Price

  const onClickCounterM = () => {
    setCounter(counter + 1);
  };

  const onClickCounterL = () => {
    if (counter != 1) {
      setCounter(counter - 1);

    }
  };
  const onClickCart = () => {
    const item = {
      id, model, brand, price
    }
    addItem(item, counter)
  };

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
          </Box>
          <div className="compra">
            <h2 className="Precio">{data.Price}$</h2>

            {counter >= 0 ? <div className="btns">
              <Button
                variant="outlined"
                color="error"
                className="minus"
                onClick={onClickCounterL}
              >
                -
              </Button>
              <h6 className="contador">{counter}</h6>
              <Button
                variant="contained"
                color="success"
                className="more"
                onClick={onClickCounterM}
              >
                +
              </Button>
              <Button
                variant="outlined"
                sx={{ marginLeft: 5, padding: 0, height: 50, padding: 2 }}
                onClick={onClickCart}
              >
                Agregar al carrito
              </Button>
            </div> : 
            <div className="btns">
                <Link to="/cart">
                <Button
                variant="outlined"
                sx={{ height: 50, padding: 2 }}
                
              >
                Terminar compra
              </Button>
              </Link>
            </div>
            }

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

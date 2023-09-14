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
import Swal from "sweetalert2";



const CardDetail = ({ data }) => {
  const [counter, setCounter] = useState(1);
  const [add, setAdd] = useState(false);

  const { addItem } = useContext(CartContext);
  const id = data.id;
  const model = data.model;
  const brand = data.brand;
  const price = data.Price;
  const img = data.img;

  const onClickCounterM = () => {
    if (data.cant !== counter) {
      setCounter(counter + 1);
    } else {
      Swal.fire("No hay mas stock disponible");
    }
  };

  const onClickCounterL = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  };
  const onClickCart = () => {
    const item = {
      id,
      model,
      brand,
      price,
      img,
    };
    addItem(item, counter);
    setAdd(true);
  };

  return (
    <Card
      className="card"
      sx={{
        display: "flex",
        maxHeight: "100%",
        maxWidth: "95%",
        flexDirection: "column",
      }}
    >
      <div className="cardContainer">
        <CardMedia
          component="img"
          image={data.img}
          alt={data.brand}
          className="cardMedia"
        />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              >
                <h3 className="detalle">Color de armazon: {data.FrameColor}</h3>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <h3 className="detalle">Color de lente: {data.LensColor}</h3>
              </Typography>
            </Box>
            <div className="compra">
              <h2 className="Precio">{data.Price}$</h2>

              {!add ? (
                <div className="purchseBtns">
                  <div className="counterContainer">
                    <Button
                      variant="outlined"
                      color="error"
                      className="minus"
                      onClick={onClickCounterL}
                    >
                      <h4>
                      -
                      </h4>
                    </Button>
                    <h6 className="contador">{counter}</h6>
                    <Button
                      variant="contained"
                      color="success"
                      className="more"
                      onClick={onClickCounterM}
                    >
                      <h4>
                      +
                      </h4>
                    </Button>
                  </div>
                  <Button
                    variant="outlined"
                    sx={{ padding: 0, height: 60, marginTop: 2 }}
                    onClick={onClickCart}
                  >
                    <h3 className="cartBtn"> 
                    Agregar al carrito
                    </h3>
                  </Button>
                </div>
              ) : (
                <div className="btns">
                  <Link to="/cart">
                    <Button variant="outlined" sx={{ height: 50 }}>
                      <h3 className="finishBuy">
                      Terminar compra
                      </h3>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Box>
      </div>
    </Card>
  );
};

export default CardDetail;

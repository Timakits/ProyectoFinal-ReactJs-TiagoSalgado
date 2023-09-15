import * as React from "react";
import { useContext } from "react";

//MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//context
import { CartContext } from "../../context/cartContext";

const CardCart = () => {
  const { cart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <>
      {cart.map((product) => {
        total(product.price * product.counter);
        return (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#1B1E1F",
            }}
            key={product.id}
          >
            <CardMedia
              component="img"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              image={product.img}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <CardContent sx={{}}>
                <Typography component="div" variant="h5">
                  {product.model} {product.brand}
                </Typography>
                <Typography variant="h6" component="div">
                  Cantidad: {product.counter}
                </Typography>
                <Typography variant="h6" component="div">
                  Precio por unidad: ${product.price}
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="TotalAndBtn">
                <div>
                  <Typography
                    component="div"
                    variant="h3"
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "bisque",
                    }}
                  >
                    ${product.price * product.counter}
                  </Typography>
                </div>
                <div>
                  <IconButton onClick={() => removeItem(product.id)}>
                    <h3 className="deleteIcon" style={{ color: "white" }}>
                      Eliminar
                      <DeleteIcon />
                    </h3>
                  </IconButton>
                </div>
              </div>
            </Box>
          </Card>
        );
      })}
    </>
  );
};
export default CardCart;

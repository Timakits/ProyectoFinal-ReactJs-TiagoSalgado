import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


//context
import { CartContext } from "../../context/cartContext";

const CardCart = () => {
  const { cart } = useContext(CartContext);
  const { removeItem } = useContext(CartContext)
  const { total } = useContext(CartContext)
  
  
  return (
    <>
      {cart.map((product) => {
                total(product.price * product.counter)
        return (
          <Card sx={{ display: 'flex' , marginTop: "5%"}} key={product.id}>
          <CardMedia
            component="img"
            sx={{ width: 151, height: 151 }}
            image={product.img}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{  }}>
              <Typography component="div" variant="h5">
                {product.model} {product.brand}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                Cantidad: {product.counter}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                Precio por unidad: ${product.price}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{display:"flex", width:"42%", flexDirection:"column", alignItems:"end"}}>
          <Typography component="div" variant="h3" sx={{marginTop:"5%", marginRight:"5%"}} >
                ${product.price * product.counter}
              </Typography>
          <IconButton>
            <h3 onClick={() => removeItem(product.id)}>
            Eliminar<DeleteIcon/>
            </h3>
          </IconButton>
          </Box>
        </Card>
        );
      })}
    </>
  );
};
export default CardCart;


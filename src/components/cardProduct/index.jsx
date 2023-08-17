import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//COMPONENTS

import Spinner from "../spinner";

//IMAGENES

import id1 from "../../assets/img/glasses/1.jpg"


const CardProduct = ({data}) =>   {


    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={data.brand}
                height="250"
                image={data.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.model}  {data.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.Price}$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">+ Detalles</Button>
                <Button size="small">Comprar <i class="fa-solid fa-cart-shopping"></i></Button>
            </CardActions>
        </Card>
    );
}


export default CardProduct
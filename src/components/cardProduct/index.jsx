import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//COMPONENTS

import Spinner from "../spinner";

//IMAGENES




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
                <Link to={`/Productos/Detail/${data.id}`}><Button size="small">+ Detalles</Button></Link>
                <Link to={`/Productos/Detail/${data.id}`}><Button size="small">Comprar <i class="fa-solid fa-cart-shopping"></i></Button></Link>
            </CardActions>
        </Card>
    );
}


export default CardProduct
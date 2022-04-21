import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../images/img1.jpg'

export default function MultiActionAreaCard() {
    return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardActionArea>
        <CardMedia
            component="img"
            image={img}
            alt="green iguana"
            sx={{height: '65%'}}
        />
        <CardContent sx={{height: '25%'}}>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        </CardActionArea >
    </Card>
);
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 292,
    },
    media: {
        height: 140,
    },
});

const ProductGrid = () => {
    const classes = useStyles();

    const products = [
        {
            name: "A Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "B Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "C Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "D Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },{
            name: "E Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "F Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "G Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        },
        {
            name: "H Product Name",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: ""
        }
    ];

    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item xs={3} key={product.name}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={product.imageURL}
                            title={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Type: {product.type}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Sales Price: ${product.salesPrice}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Price: ${product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;

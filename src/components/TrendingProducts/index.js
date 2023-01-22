import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import "./styles.scss";

const useStyles = makeStyles({
    card: {
        maxWidth: 292,
    },
    media: {
        height: 140,
    },
});

const ProductGrid = () => {
    const imgURL = "https://raw.githubusercontent.com/raulfmiranda/digital-store-06/main/src/components/TrendingProducts/assets/productimg.jpg";

    const products = [
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },{
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "R$ 100",
            price: "R$ 150",
            imageURL: imgURL
        }
    ];

    return (
        <Grid container justifyContent="center" spacing={2}>
            {products.map((product) => (
                <Grid item>
                    <item>
                    <img className='product-img' src={product.imageURL}/>
                    <p className='product-type'>{product.type}</p>
                    <p className='product-name'>{product.name}</p>
                    <p className='product-prices'>
                        <span className='product-price'>{product.price}</span>
                        <span className='product-salesPrice'>{product.salesPrice}</span>
                    </p>
                    </item>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;

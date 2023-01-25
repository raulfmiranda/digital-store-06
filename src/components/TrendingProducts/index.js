import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: '30% OFF'
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: '30% OFF'
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        },{
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        },
        {
            name: "K-Swiss V8 - Masculino",
            type: "Tênis",
            salesPrice: "$100",
            price: "$200",
            imageURL: imgURL,
            promo: ''
        }
    ];

    return (
        <section className='trending-products'>
            <div className='gridtop'>
                <span><b>Produtos em alta</b></span>
                <span className='see-all'>Ver todos &rarr;</span>
            </div>
            <Grid container spacing={0.5}>
                {products.map((product) => (
                    <Grid item xs={12} sm={4} md={3} className='aaa'>
                        <div className='product-promo'>
                            <p className='product-promo-content'>{product.promo}</p>
                        </div>
                        <img className='product-img' src={product.imageURL}/>
                        <p className='product-type'>{product.type}</p>
                        <p className='product-name'>{product.name}</p>
                        <p className='product-prices'>
                            <span className='product-price'>{product.price}</span>
                            <span className='product-salesPrice'><b>{product.salesPrice}</b></span>
                        </p>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default ProductGrid;

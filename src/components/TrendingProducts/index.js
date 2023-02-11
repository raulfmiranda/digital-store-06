import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import productimg from './assets/productimg.png';
import "./styles.scss";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(response => setProducts(response));
    }, []);

    return (
        <section className='trending-products'>
            <div className='trending-products-content'>
                <div className='gridtop'>
                    <span><b>Produtos em alta</b></span>
                    <span className='see-all'>Ver todos &rarr;</span>
                </div>
                <Grid container spacing={2} justifyContent="center">
                    {products.map((product) => (
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper elevation={3}>
                                <div className='product-promo pt-3'>
                                    {
                                        product.promo &&
                                        <p className='product-promo-content'>{product.promo}</p>
                                    }
                                </div>
                                <img className='product-img' src={productimg}/>
                            </Paper>
                            <p className='product-type'>{product.type}</p>
                            <p className='product-name'>{product.name}</p>
                            <p className='product-prices'>
                                <span className='product-price'>{product.price}</span>
                                <span className='product-salesPrice'><b>{product.salesPrice}</b></span>
                            </p>
                        </Grid>
                    ))}
                </Grid>
                
            </div>
        </section>
    );
};

export default ProductGrid;

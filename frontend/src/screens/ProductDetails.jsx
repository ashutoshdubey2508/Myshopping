import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import products from '../products';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { ListItem } from '@mui/material';
import  List  from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Rating from '../components/Rating';
import { Button } from '@material-ui/core';
import {Link } from 'react-router-dom';

const ProductDetails = () => {
    let { id } = useParams();
     const [product, setproduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setproduct(data);
        }
        fetchProduct();
    }, [id]);

    return (
        <>
            <Link to="/" style={{ textDecoration: "none" }}>
               <Button style={{borderRadius: 5,
                              backgroundColor: "black",
                              color:"white",       
                              fontSize: "10px",
                              width: 100,
                              height: 20,
                              marginBottom: 5,
                              marginTop: -15   }} variant="contained" > Go Back
                </Button>
                </Link>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} float="center">
                    
                       <Box className='imgclass_container' >
                        
                            <img className='imgclass_ProductDetails' src={product.image} alt={product.name}/>
                       
                          </Box>
                   
                </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <List >
                        <ListItem>{ product.name}</ListItem>
                        <Divider />
                        <ListItem> <Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListItem>
                        <Divider />
                        <ListItem>Price : ${ product.price}</ListItem>
                        <Divider />
                        <ListItem>{ product.description}</ListItem>
                     </List>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <List>
                        <ListItem >
                           
                          Status : {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                            
                        </ListItem>
                        <ListItem >
                           
                            <Button style={{ borderRadius: 5,
                                             backgroundColor: "black",
                                             padding: "18px 36px",
                                             color:"white",
                                             fontSize: "18px",
                                              width: 200,
                                               height:60  }} variant="contained"  >   Add to Cart
                            </Button>
                            
                        </ListItem>

                   </List>
                </Grid>

           </Grid>
        </>
    );
};

export default ProductDetails;
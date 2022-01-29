import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const ProductScreen = ({ product } ) => {
    return (
        <>
          <Grid item>
                    <Paper>
                        <Box width={200} height={250} textAlign="center">
                        <Link to={`/product/${product._id}`}>
                            <img className='imgclass' src={product.image} alt={product.name}/>
                        </Link>
                        <Link to={`/product/${product._id}`}>
                            <Box text style={{ color:"black" }}>
                                <strong>{product.name}</strong>
                          </Box>
                        </Link>   
                        <Box>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </Box>
                        <Box text>
                           $ {product.price}
                        </Box>
                        </Box>
                    </Paper>
                </Grid>
        </>
    )
}

export default ProductScreen;
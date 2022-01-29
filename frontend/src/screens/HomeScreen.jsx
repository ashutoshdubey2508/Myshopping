import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Products from "../products";
// import { DataGrid } from '@mui/x-data-grid';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import Grid from '@material-ui/core/Grid';

// import Layout from '../components/Layout'
import ProductScreen from './ProductScreen';

const HomeScreen = () => {

    const [Products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/products')
            setProducts(data);
        };
        fetchProducts();
    }, []); 

    return (
        <>
            <Grid container justify='center' alignItems='center' spacing={4} >
                
                {
                    Products.map(product => (
                     <ProductScreen product={product}/>
                    ))
                }
            </Grid>
        </>
       
    );
}

export default HomeScreen;

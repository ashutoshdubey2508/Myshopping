import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from '@material-ui/core';
import ProductDetails from './screens/ProductDetails';

// import { ClassNames } from '@emotion/react';


function App() {
  return (
  

    <Router>
      
      <Header />
       
      <main>
       <h1>Ecommerce app</h1>
       
        <Container>

            <Routes>
       
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductDetails/>} />
            {/* Remeber for v6 Route syntax is changed */}
         </Routes>
          </Container>
         
      </main>  
       
        <Footer />
       
    </Router>  
  );
}

export default App;

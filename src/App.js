import React , {Component} from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart';
import NotFound from './components/NotFound'
import {ProductProvider} from './context'
import Modal from './components/Modal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/details' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Modal />
        </Router>
      </ProductProvider>
    );
  }
}

export default App;

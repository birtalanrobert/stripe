import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cart-page';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Canceled from './components/checkout/stripe-checkout/canceled';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />}/>
        <Route path="/canceled" element={<Canceled />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
// import Product from "./components/Product";
// import CartSummary from "./components/Cartsummary";
import Cartsummary from "./components/Cartsummary";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
function App() {
  // create a state
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      {/* <Product count={count} setCount={setCount} />
      <CartSummary count={count} /> */}
      <NavBar cartCount={cart.length}/>
      <ProductList cart={cart} setCart={setCart}/>
      <Cartsummary cart={cart}/>
    </div>
  );
}

export default App;

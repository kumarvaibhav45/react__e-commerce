import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";
import { Switch, Route, HashRouter } from "react-router-dom";
import ProductModal from "./components/ProductModal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={ProductList}
        />
        <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
        <Route
          path={`${process.env.PUBLIC_URL}/details`}
          component={ProductDetails}
        />
        <Route component={Default} />
      </Switch>
      <ProductModal />
    </React.Fragment>
  );
}

export default App;

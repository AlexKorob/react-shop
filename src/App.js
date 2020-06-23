import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList } from 'Components/Pages/ProductList';
import { ProductDetail } from 'Components/Pages/ProductDetail';
import { Cart as CartInRightCorner } from  'Components/Cart';
import { CartList } from 'Components/Pages/CartList';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/detail/:id' component={ProductDetail} />
        <Route exact path='/cart/' component={CartList} />
      </Switch>
      <CartInRightCorner />
    </Router>
  );
}

export default App;

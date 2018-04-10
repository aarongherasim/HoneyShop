import React from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./home";
import Honey from "./honey";
import Contact from "./contact";
import Shoppingcart from "./shoppingcart";

import ShoppingCart from "./images/shoppingcart.png";

class Main extends React.Component {
    render() {
      return(   
        <HashRouter>
        <div>
            <div className="honey-group">
            <h1 className="shop-title">Honey Shop</h1>
            <div className="shopping-cart"><NavLink to="/shoppingcart"><img src={ShoppingCart} alt="" /></NavLink></div>
            </div>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/honey">Honey</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/honey" component={Honey}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/shoppingcart" component={Shoppingcart}/>
            </div>
        </div>
        </HashRouter>
      );
    }
};

export default Main;
import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./home";
import Honey from "./honey";
import Contact from "./contact";

import image from './images/honey.jpg';

class Main extends React.Component {
    render() {
      return(
        <HashRouter>
        
        <div>
            <h1>Honey Shopp</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/honey">Honey</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/honey" component={Honey}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </div>
        </HashRouter>
      );
    }
};

export default Main;
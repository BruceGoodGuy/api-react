import React, {Component} from 'react';
import { Link  } from "react-router-dom";
class Menus extends Component {
  render(){
    return (
        <div className="container-fluid">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product/add">Add</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
  }
}

export default Menus;

import React from "react";
import joyeria from "../../images/joyeria.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            
            <Link to="/">
                <div className="logo">
                    <img src={joyeria} alt="logo" width="150 px"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="#">INICIO</Link>
                </li>
                <li>
                    <link to="#">PRODUCTOS</link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item-total">0</span>
            </div>
        </header>
    )
}
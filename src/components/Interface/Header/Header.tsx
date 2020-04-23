import React from "react";
import './Header.scss';
import {Link} from "@reach/router";

export const Header: React.FunctionComponent = () => {

    return (
        <div className="header-container">
            <div className="link-container">
                <Link to="/" className="page-link">EMarket</Link>
                <Link to="/" className="page-link">Home</Link>
                <Link to="/shop" className="page-link">Shop</Link>
                <Link to="/contact" className="page-link">Contact</Link>
                <Link to="/login" className="page-link">Sign In</Link>
            </div>
        </div>
    );
};
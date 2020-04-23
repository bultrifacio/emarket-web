import React from "react";
import './Header.scss';
import {Link} from "@reach/router";
import {PageEnum} from "../../../shared/enum/PageEnum";

interface HeaderProps {
    pageEnum: PageEnum;
}

export const Header: React.FunctionComponent<HeaderProps> = props => {

    return (
        <div className="header-container">
            <div className="link-container">
                <Link to="/" className="page-link">EMarket</Link>
                <Link to="/" className={`page-link ${props.pageEnum === PageEnum.HOME ? 'focused' : null}`}>Home</Link>
                <Link to="/profile" className={`page-link ${props.pageEnum === PageEnum.PROFILE ? 'focused' : null}`}>Profile</Link>
                <Link to="/login" className="page-link">Sign In</Link>
            </div>
        </div>
    );
};
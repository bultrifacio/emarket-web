import React from "react";
import './ContentPage.scss';
import {Header} from "../Header/Header";
import {PageEnum} from "../../../shared/enum/PageEnum";

interface ContentPageProps {
    pageEnum: PageEnum;
}

export const ContentPage: React.FunctionComponent<ContentPageProps> = (props) => {
    return (
        <div className="page-container">
            <Header/>
            <div className="content-container">
                {props.children}
            </div>
        </div>);
};
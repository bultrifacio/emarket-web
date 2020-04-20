import React from "react";
import {RouteComponentProps} from "@reach/router";
import {ContentPage} from "../../Interface/ContentPage/ContentPage";
import {PageEnum} from "../../../shared/enum/PageEnum";

export const Shop: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <ContentPage pageEnum={PageEnum.SHOP}>
            <h1>Shop</h1>
        </ContentPage>);
};
import React from "react";
import {RouteComponentProps} from "@reach/router";
import {PageEnum} from "../../../shared/enum/PageEnum";
import {ContentPage} from "../../Interface/ContentPage/ContentPage";

export const Contact: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <ContentPage pageEnum={PageEnum.CONTACT}>
            <h1>Contact</h1>
        </ContentPage>);
};
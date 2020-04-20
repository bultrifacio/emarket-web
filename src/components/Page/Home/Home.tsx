import React from "react";
import {RouteComponentProps} from "@reach/router";
import {ContentPage} from "../../Interface/ContentPage/ContentPage";
import {PageEnum} from "../../../shared/enum/PageEnum";


export const Home: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <ContentPage pageEnum={PageEnum.HOME}>
            <h1>Home</h1>
        </ContentPage>
    );
};
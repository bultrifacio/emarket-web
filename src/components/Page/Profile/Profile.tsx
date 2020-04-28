import React from "react";
import {RouteComponentProps} from "@reach/router";
import {ContentPage} from "../../Interface/ContentPage/ContentPage";
import {PageEnum} from "../../../shared/enum/PageEnum";
import {Card, Descriptions} from "antd";
import './Profile.scss';

export const Profile: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <ContentPage pageEnum={PageEnum.PROFILE}>
            <div className="profile">
                <div className="container">
                    <Card title="Credentials info">
                        <Descriptions bordered>
                            <Descriptions.Item label="Email">Zhou Maomao</Descriptions.Item>
                            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                            <Descriptions.Item label="CIF">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="Shop Name">empty</Descriptions.Item>
                            <Descriptions.Item label="Address">
                                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                            <Descriptions.Item label="Description">empty</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </div>
            </div>
        </ContentPage>);
};
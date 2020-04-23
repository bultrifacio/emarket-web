import React from "react";
import {RouteComponentProps} from "@reach/router";
import {ContentPage} from "../../Interface/ContentPage/ContentPage";
import {PageEnum} from "../../../shared/enum/PageEnum";

import {Button, Form, Input} from 'antd';
import {userService} from "../../../shared/service/auth.service";
import {User} from "../../../shared/model/User";

export const Login: React.FunctionComponent<RouteComponentProps> = () => {

    const onFinish = (values: any) => {
        const user: User = values;
        userService.login(user).then((response: User) => console.log(response));
    };

    return (
        <ContentPage pageEnum={PageEnum.LOGIN}>
            <h1>Sign In</h1>
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Sign In
                </Button>
            </Form.Item>
            </Form>
        </ContentPage>
    );
};
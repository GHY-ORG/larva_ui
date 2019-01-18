import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends Component {
    static displayName = 'Login';

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>记住账号</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" block>登录</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default class Login extends Component {
    static displayName = 'Login';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const WrappedLoginForm = Form.create()(LoginForm);
        return (<WrappedLoginForm />)
    }
}
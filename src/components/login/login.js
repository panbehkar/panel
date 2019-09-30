import React, { useContext } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { AuthContext } from '../../contexts/authContext';

const Login = (props) => {
    const realUserPass = {
        username: "test",
        password: "1"
    };
    const { dispatch } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((error, enteredUserPass) => {
            if (!error) {
                if (enteredUserPass.username === realUserPass.username && enteredUserPass.password === realUserPass.password) {
                    dispatch({ type: 'LOGIN_SUCCESS', user: enteredUserPass });
                    window.localStorage.setItem('auth', true);
                    message.loading('Please wait..', 0.5)
                        .then(() => {
                            message.destroy();
                        }).then(() => {
                            message.success('You are logged in', 1);
                        })
                        .then(() => props.history.replace('/dashboard'));
                }
                else {
                    dispatch({ type: 'LOGIN_ERROR' })
                    window.localStorage.setItem('auth', false);
                    message.loading('Please wait..', 0.5)
                        .then(() => {
                            message.destroy();
                        }).then(() => {
                            message.error('Your username or password is incorrect!', 2);
                        });
                }
            };
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <section className="login-form-wrapper">
            <Form onSubmit={handleSubmit} className="p-form login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item className="form-item-submit">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="#!">
                        Forgot password
              </a>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        Log in
              </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

const WrappedFormLogin = Form.create({ name: 'form-login' })(Login);
export default WrappedFormLogin;
import React from "react";
import { Form, Col, Input, Button, Checkbox, Radio } from "antd";

const FormOne = ({ form }) => {
	const handleSubmit = e => {
		e.preventDefault();
		form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};
	const { getFieldDecorator } = form;
	return (
		<Form className="p-form" onSubmit={handleSubmit}>
			<Col xs={24} sm={24} lg={12}>
				<Form.Item label="Username" hasFeedback>
					{getFieldDecorator("username", {
						rules: [
							{
								required: true,
								message: "Please insert your username!"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="E-mail" hasFeedback>
					{getFieldDecorator("email", {
						rules: [
							{
								type: "email",
								message: "The E-mail format is not valid!"
							},
							{
								required: true,
								message: "Please insert your E-mail!"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Password" hasFeedback>
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message: "Please insert your password!"
							}
						]
					})(<Input.Password />)}
				</Form.Item>
			</Col>
			<Col xs={24} sm={24} lg={12}>
				<Form.Item label="Username">
					{getFieldDecorator("username2", {
						rules: [
							{
								required: false,
								message: "Please insert your username!"
							}
						]
					})(<Input placeholder="Username" />)}
				</Form.Item>
				<Form.Item label="E-mail">
					{getFieldDecorator("email2", {
						rules: [
							{
								type: "email",
								message: "The E-mail format is not valid!"
							},
							{
								required: false,
								message: "Please insert your E-mail!"
							}
						]
					})(<Input placeholder="E-mail" />)}
				</Form.Item>
				<Form.Item label="Checkbox">
					{getFieldDecorator("checkbox-group", {
						initialValue: ["a", "b"]
					})(
						<Checkbox.Group>
							<Checkbox value="a">Item One</Checkbox>
							<Checkbox value="b">Item Two</Checkbox>
							<Checkbox value="c">Item Three</Checkbox>
						</Checkbox.Group>
					)}
				</Form.Item>
				<Form.Item label="Radio Button">
					{getFieldDecorator("radio-group", {
						initialValue: "b"
					})(
						<Radio.Group>
							<Radio value="a">Item One</Radio>
							<Radio value="b">Item Two</Radio>
							<Radio value="c">Item Three</Radio>
						</Radio.Group>
					)}
				</Form.Item>
				<Form.Item className="form-item-submit">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Col>
		</Form>
	);
};
const WrappedFormOne = Form.create({ name: "form-one" })(FormOne);
export default WrappedFormOne;

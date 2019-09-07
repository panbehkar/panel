import React, { Component } from "react";
import { Row, Col } from 'antd';
import Loading from '../components/Loading';
import FormOne from '../components/FromOne';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    };

    componentDidMount() {
        this.timeOut = setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
    };

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ?
                    <Loading /> :
                    <Row type="flex">
                        <Col xs={24} sm={24} lg={24}>
                            <div className="p-col">
                                <FormOne />
                            </div>
                        </Col>
                    </Row>
                }

            </React.Fragment>
        );
    }
}

export default Form;

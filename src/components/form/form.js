import React, { Fragment, useState, useEffect } from "react";
import { Row, Col } from 'antd';
import Loading from '../common/loading';
import FormOne from './formOne';

const Form = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => { clearTimeout(timeOut); };
    }, []);
    return (
        <Fragment>
            {isLoading ?
                <Loading /> :
                <Row type="flex">
                    <Col xs={24} sm={24} lg={24}>
                        <div className="p-col">
                            <FormOne />
                        </div>
                    </Col>
                </Row>
            }
        </Fragment>
    );
};

export default Form;

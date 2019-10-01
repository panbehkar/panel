import React, { Fragment, useState, useContext, useEffect } from "react";
import { Row, Col, Table } from 'antd';
import axios from 'axios';
import Loading from '../common/loading';
import { ListContext } from '../../contexts/listContext';

const List = () => {
    const [loading, setLoading] = useState(true);
    const { list, dispatch } = useContext(ListContext);
    const { data: listData } = list;
    useEffect(() => {
        let didCancel = false;
        let url = 'https://jsonplaceholder.typicode.com/posts';

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios(url);
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                    setLoading(false);
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        };
        fetchData();

        return () => { didCancel = true; };
    }, [dispatch]);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            className: 'list-column-title',
            render: text => <a href='#title'>{text}</a>,
        },
        {
            title: 'Platform',
            dataIndex: 'platform',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            className: 'list-column-actions',
            render: (text, record) => (
                <span>
                    <a href='#edit'>
                        <i className='fal fa-pencil'></i>
                    </a>
                    <a href='#delete'>
                        <i className='fal fa-trash'></i>
                    </a>
                </span>
            ),
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <Fragment>
            {loading ?
                <Loading /> :
                <Row type="flex">
                    <Col xs={24} sm={24} lg={24}>
                        <div className="p-col">
                            <Table
                                className="p-list"
                                bordered
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={listData}
                                rowKey={record => record.id}
                            />
                        </div>
                    </Col>
                </Row>
            }
        </Fragment>
    );
};

export default List;
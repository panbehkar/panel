import React, { Fragment, useContext, useEffect, useRef } from "react";
import { Row, Col, Table, Input, Button, Icon, Result } from 'antd';
import axios from 'axios';
import Loading from '../common/loading';
import { ListContext } from '../../contexts/listContext';

const List = ({ history }) => {
    const { list, dispatch } = useContext(ListContext);
    const { isLoading, isError, data: listData } = list;
    useEffect(() => {
        let didCancel = false;
        const url = 'https://jsonplaceholder.typicode.com/comments';

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios(url);
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
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

    const inputEl = useRef();

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={inputEl}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => confirm()}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => confirm()}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => inputEl.current.focus());
            }
        }
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            className: 'list-column-title',
            render: text => <a href='#title'>{text}</a>,
            ...getColumnSearchProps('name')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email')
        },
        {
            title: 'Body',
            dataIndex: 'body',
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

    const handleResult = () => {
        history.push('/dashboard');
    };

    return (
        <Fragment>
            {isLoading ?
                <Loading /> :
                <Row type="flex">
                    <Col xs={24} sm={24} lg={24}>
                        <div className="p-col">
                            {isError ?
                                <Result
                                    className="p-result"
                                    status="404"
                                    title="404"
                                    subTitle="Sorry, the connection between API and Server is broken."
                                    extra={<Button type="primary" onClick={handleResult}>Back Home</Button>}
                                /> :
                                <Table
                                    className="p-list"
                                    bordered
                                    rowSelection={rowSelection}
                                    columns={columns}
                                    dataSource={listData}
                                    rowKey={record => record.id}
                                />
                            }
                        </div>
                    </Col>
                </Row>
            }
        </Fragment>
    );
};

export default List;
import React, { Component } from "react";
import { Row, Col, Table } from 'antd';
import Loading from '../components/Loading';

class List extends Component {
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

    render() {
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

        const data = [
            {
                key: '1',
                title: 'Test post number 1',
                platform: 'iOS',
                date: '01/03/98',
            },
            {
                key: '2',
                title: 'Test post number 2',
                platform: 'iOS',
                date: '02/03/98',
            },
            {
                key: '3',
                title: 'Test post number 3',
                platform: 'iOS',
                date: '03/03/98',
            },
            {
                key: '4',
                title: 'Test post number 4',
                platform: 'iOS',
                date: '04/03/98',
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };

        return (
            <React.Fragment>
                {this.state.isLoading ?
                    <Loading /> :
                    <Row type="flex">
                        <Col xs={24} sm={24} lg={24}>
                            <div className="p-col">
                                <Table className="p-list" bordered rowSelection={rowSelection} columns={columns} dataSource={data} />
                            </div>
                        </Col>
                    </Row>
                }

            </React.Fragment>
        );
    }
}

export default List;
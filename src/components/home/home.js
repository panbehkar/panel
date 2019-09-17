import React, { Component } from "react";
import { Row, Col } from 'antd';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';

class Home extends Component {
    render() {
        const barData = {
            labels: [
                'Weekly',
                'Monthly',
                'Yearly'
            ],
            datasets: [
                {
                    data: [15, 20, 25],
                    backgroundColor: [
                        'rgb(158, 251, 211, 0.5)',
                        'rgb(255, 154, 158, 0.5)',
                        'rgb(69, 212, 251, 0.5)'
                    ],
                    borderWidth: 0,
                }
            ],
        };
        const lineData = {
            labels: [
                'Weekly',
                'Monthly',
                'Yearly',
                'Weekly',
                'Monthly',
                'Yearly'
            ],
            datasets: [
                {
                    data: [15, 25, 15, 30, 25, 35],
                    fill: false,
                    borderColor: [
                        'rgb(69, 212, 251, 0.7)'
                    ],
                    pointBackgroundColor: [
                        'rgb(69, 212, 251, 0.7)',
                        'rgb(69, 212, 251, 0.7)',
                        'rgb(69, 212, 251, 0.7)',
                        'rgb(69, 212, 251, 0.7)',
                        'rgb(69, 212, 251, 0.7)',
                        'rgb(69, 212, 251, 0.7)'
                    ],
                    pointBorderColor: 'rgb(69, 212, 251, 0.7)',
                    pointBorderWidth: 0,
                    pointRadius: 3,
                    pointHoverRadius: 3
                },
                {
                    data: [20, 15, 25, 20, 30, 20],
                    fill: false,
                    borderColor: [
                        'rgb(255, 154, 158, 0.7)'
                    ],
                    pointBackgroundColor: [
                        'rgb(255, 154, 158, 0.7)',
                        'rgb(255, 154, 158, 0.7)',
                        'rgb(255, 154, 158, 0.7)',
                        'rgb(255, 154, 158, 0.7)',
                        'rgb(255, 154, 158, 0.7)',
                        'rgb(255, 154, 158, 0.7)'
                    ],
                    pointBorderColor: 'rgb(255, 154, 158, 0.7)',
                    pointBorderWidth: 0,
                    pointRadius: 3,
                    pointHoverRadius: 3
                },
                {
                    data: [35, 30, 20, 15, 20, 30],
                    fill: false,
                    borderColor: [
                        'rgb(158, 251, 211, 0.7)'
                    ],
                    pointBackgroundColor: [
                        'rgb(158, 251, 211, 0.7)',
                        'rgb(158, 251, 211, 0.7)',
                        'rgb(158, 251, 211, 0.7)',
                        'rgb(158, 251, 211, 0.7)',
                        'rgb(158, 251, 211, 0.7)',
                        'rgb(158, 251, 211, 0.7)'
                    ],
                    pointBorderColor: 'rgb(158, 251, 211, 0.77)',
                    pointBorderWidth: 0,
                    pointRadius: 3,
                    pointHoverRadius: 3
                }
            ],
        };
        const radarData = {
            labels: [
                'Weekly',
                'Monthly',
                'Yearly',
                'Weekly',
                'Monthly',
            ],
            datasets: [
                {
                    data: [10, 5, 15, 20, 25],
                    backgroundColor: 'rgb(69, 212, 251, 0.5)',
                    pointBackgroundColor: [
                        'rgb(69, 212, 251, 0.8)',
                        'rgb(69, 212, 251, 0.8)',
                        'rgb(69, 212, 251, 0.8)',
                        'rgb(69, 212, 251, 0.8)',
                        'rgb(69, 212, 251, 0.8)',
                    ],
                    borderColor: 'rgb(69, 212, 251, 0)',
                    pointBorderWidth: 0,
                    pointRadius: 2,
                    pointHoverRadius: 2
                },
                {
                    data: [20, 15, 5, 10, 20],
                    backgroundColor: 'rgb(255, 154, 158, 0.5)',
                    pointBackgroundColor: [
                        'rgb(255, 154, 158, 0.8)',
                        'rgb(255, 154, 158, 0.8)',
                        'rgb(255, 154, 158, 0.8)',
                        'rgb(255, 154, 158, 0.8)',
                        'rgb(255, 154, 158, 0.8)',
                    ],
                    borderColor: 'rgb(255, 154, 158, 0)',
                    pointBorderWidth: 0,
                    pointRadius: 2,
                    pointHoverRadius: 2
                },
                {
                    data: [25, 15, 10, 25, 20],
                    backgroundColor: 'rgb(158, 251, 211, 0.5)',
                    pointBackgroundColor: [
                        'rgb(158, 251, 211, 0.8)',
                        'rgb(158, 251, 211, 0.8)',
                        'rgb(158, 251, 211, 0.8)',
                        'rgb(158, 251, 211, 0.8)',
                        'rgb(158, 251, 211, 0.8)',
                    ],
                    borderColor: 'rgb(158, 251, 211, 0)',
                    pointBorderWidth: 0,
                    pointRadius: 2,
                    pointHoverRadius: 2
                }
            ],
        };
        const barOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 10,
                        stepSize: 5,
                    }
                }],
                xAxes: [{
                    display: false,
                }]
            },
        };
        const pieOptions = {
            legend: {
                display: false
            }
        };
        const radarOptions = {
            legend: {
                display: false
            },
            scale: {
                ticks: {
                    maxTicksLimit: 5,
                    display: false
                },
                pointLabels: {
                    display: false
                },
            }
        };
        return (
            <React.Fragment>
                <Row type="flex">
                    <Col xs={24} sm={12} lg={6}>
                        <div className="p-col p-quick-stats">
                            <div className="quick-stats-row-one">
                                <i className="fal fa-chart-scatter"></i>
                                <h3>Daily Stats</h3>
                            </div>
                            <div className="quick-stats-row-two">
                                <h1>126</h1>
                                <h3>
                                    <span>5%</span>
                                    <i className="far fa-arrow-up"></i>
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="p-col p-quick-stats">
                            <div className="quick-stats-row-one">
                                <i className="fal fa-chart-bar"></i>
                                <h3>Weekly Stats</h3>
                            </div>
                            <div className="quick-stats-row-two">
                                <h1>507</h1>
                                <h3>
                                    <span>2%</span>
                                    <i className="far fa-arrow-up"></i>
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="p-col p-quick-stats">
                            <div className="quick-stats-row-one">
                                <i className="fal fa-chart-pie-alt"></i>
                                <h3>Monthly Stats</h3>
                            </div>
                            <div className="quick-stats-row-two">
                                <h1>2074</h1>
                                <h3>
                                    <span>1%</span>
                                    <i className="far fa-arrow-down"></i>
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="p-col p-quick-stats">
                            <div className="quick-stats-row-one">
                                <i className="fal fa-chart-line"></i>
                                <h3>Yearly Stats</h3>
                            </div>
                            <div className="quick-stats-row-two">
                                <h1>38791</h1>
                                <h3>
                                    <span>4%</span>
                                    <i className="far fa-arrow-down"></i>
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row type="flex">
                    <Col xs={24} sm={12} lg={12}>
                        <div className="p-col">
                            <Line data={lineData} options={barOptions} />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className="p-col">
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className="p-col">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className="p-col">
                            <Doughnut data={barData} options={pieOptions} />
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Home;

import React, { Component } from 'react';
import {
    LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Chart } from "react-google-charts";
import { 
    COST_PERFORMANCE_INDEX, 
    COST_BUDJET_VS_EXPENSE, 
    PAYMENTS, 
    PROJECT_QUALITY_TABLE_DATA, 
    PROJECT_RISK_TABLE_DATA, 
    PROJECT_QUALITY_CHART_DATA,
    PROJECT_RISK_CHART_DATA,
    PROJECT_OPERATION_TABLE_DATA
} from './constant';

class App extends Component {
    render() {
        return (
            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-12">
                        <h5>PROJECT FINANCIALS</h5>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-5 col-sm-6 col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm">
                                    <div className="card-header px-0">
                                        <div className="card-title m-0 px-2">Cost Performance Index</div>
                                    </div>
                                    <div className="card-body">
                                        <ResponsiveContainer width="100%" height={100}>
                                            <LineChart data={COST_PERFORMANCE_INDEX}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="card shadow-sm">
                                    <div className="card-header px-0">
                                        <div className="card-title m-0 px-2">Cost Performance Index</div>
                                    </div>
                                    <div className="card-body">
                                        <Chart
                                            width={'100%'}
                                            height={'150px'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={PROJECT_QUALITY_CHART_DATA}
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="card shadow-sm">
                                    <div className="card-header px-0">
                                        <div className="card-title m-0 px-2">Cost Performance Index</div>
                                    </div>
                                    <div className="card-body">
                                        <ResponsiveContainer width="100%" height={100}>
                                            <LineChart data={COST_PERFORMANCE_INDEX}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="card shadow-sm">
                                    <div className="card-header px-0">
                                        <div className="card-title m-0 px-2">Cost Performance Index</div>
                                    </div>
                                    <div className="card-body">
                                        <Chart
                                            width={'100%'}
                                            height={'150px'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={PROJECT_QUALITY_CHART_DATA}
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-8 col-md-7 col-sm-6 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="card shadow-sm">
                                    <div className="card-header">
                                        <div className="card-title m-0">
                                            Cost (Budjet Vs Expenses)
                                        </div>
                                    </div>
                                    <div className="card-body px-0 mt-2">
                                        <ResponsiveContainer width="100%" height={300}>
                                            <BarChart
                                                data={COST_BUDJET_VS_EXPENSE}
                                                margin={{
                                                    top: 5, right: 30, left: 20, bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="pv" fill="#8884d8" />
                                                <Bar dataKey="uv" fill="#82ca9d" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="card shadow-sm">
                                    <div className="card-header">
                                        <div className="card-title m-0">
                                            Expenses
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Chart
                                            width={'100%'}
                                            height={'300px'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={PAYMENTS}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="card shadow-sm">
                                    <div className="card-header">
                                        <div className="card-title m-0">
                                            Progress
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th scope="col">Phases</th>
                                                    <th scope="col">PoC</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Deadline</th>
                                                    <th scope="col">Deliverables</th>
                                                    <th scope="col">Overdue</th>
                                                    <th scope="col">Upcoming</th>
                                                    <th scope="col">Completed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {PROJECT_OPERATION_TABLE_DATA.map((each, i) =>  
                                                    <tr>
                                                        <th scope="row">{each.phases}</th>
                                                        <td className="text-center">
                                                            <img src="https://www.iwillteachyouexcel.com/wp-content/uploads/2017/06/Picture17.png" width="100"/>
                                                            <p>{each.poc} %</p>
                                                        </td>
                                                        <td>{each.status}</td>
                                                        <td>{each.deadline}</td>
                                                        <td>{each.deliverables}</td>
                                                        <td>{each.overdue}</td>
                                                        <td>{each.upcoming}</td>
                                                        <td>{each.completed}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h5>PROJECT FINANCIALS</h5>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title m-0">
                                    Overview
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-3">
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
                                        <Chart
                                            width={'100%'}
                                            height={'300px'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={PROJECT_QUALITY_CHART_DATA}
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                    </div>
                                    <div className="col-xl-9 col-md-8 col-md-7 col-sm-6 col-12 table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th scope="col">Issue</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">OverDue</th>
                                                    <th scope="col">Due</th>
                                                    <th scope="col">Yet To Start</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {PROJECT_QUALITY_TABLE_DATA.map((each, i) =>  
                                                    <tr>
                                                        <th scope="row">{each.issue}</th>
                                                        <td>{each.total}</td>
                                                        <td>{each.overdue}</td>
                                                        <td>{each.due}</td>
                                                        <td>{each.yet_to_start}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h5>PROJECT RISK</h5>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title m-0">
                                    Overview
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mt-3">
                                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
                                        <Chart
                                            width={'100%'}
                                            height={'300px'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={PROJECT_RISK_CHART_DATA}
                                            rootProps={{ 'data-testid': '3' }}
                                        />
                                    </div>
                                    <div className="col-xl-9 col-md-8 col-md-7 col-sm-6 col-12 table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th scope="col">Risk</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Remote</th>
                                                    <th scope="col">Unlikley</th>
                                                    <th scope="col">Likely</th>
                                                    <th scope="col">Highly Likely</th>
                                                    <th scope="col">Near Certain</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {PROJECT_RISK_TABLE_DATA.map((each, i) =>  
                                                    <tr>
                                                        <th scope="row">{each.risk}</th>
                                                        <td>{each.total}</td>
                                                        <td>{each.remote}</td>
                                                        <td>{each.unlikely}</td>
                                                        <td>{each.likely}</td>
                                                        <td>{each.highly_likely}</td>
                                                        <td>{each.nearly_certain}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Modal from '../../Common/Modal';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 5,
            page: 1,
            selectedId: 0,
        }
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    prevPage() {
        this.setState({ page: this.state.page - 1 })
        this.props.fetchUserList(this.state.page - 1 , this.state.limit)
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
        this.props.fetchUserList(this.state.page + 1 , this.state.limit)
    }
    componentDidMount() {
        this.props.fetchUserList(this.state.page, this.state.limit)
    }
    handlePageChange(pageNumber) {
        this.setState({ page: pageNumber });
        this.props.fetchUserList(parseInt(pageNumber), this.state.limit)
    }
    render() {
        const { searchString } = this.state
        return (
           <div className="row my-2">
                <div className="col-6 mb-2">
                   <h4>User List</h4>
                </div>
                
                <div className="col-6 text-right">
                    <Link to='/create'><button className="btn btn-primary btn-sm mr-2">Add New</button></Link>
                </div>
                {
                   this.props.userList.map((user, i) => 
                    <div className="col-12" key={i}>
                        <div className="card bg-light p-3 mt-2">
                            <div className="row text-center align-items-center justify-content-center">
                                <div className="col-lg-1 m-auto">
                                        <img src="/Icons/John_Donne.png"/>
                                </div>
                                <div className="col-lg-3 text-left">
                                    <h5 className="mb-1">{ user.Name}</h5>
                                    <h5 className="mb-1">{ user.Email}</h5>
                                </div>
                                <div className="col-lg-4">
                                    <h5 className="m-0">Contact: {user.Phone === "" ? 'Not mentioned' : user.Phone}</h5>
                                </div>
                                <div className="col-lg-2 m-auto">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-3">
                                            <Link to={`/users/${user.User_id}`}>
                                                <img src="/Icons/Edit.png" className="mr-4"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                <div className="col-12 mt-3">
                    <div className="card bg-light p-3">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-3">
                                <p>Showing {((this.state.page-1)*this.state.limit)+1} to {((this.state.page)*this.state.limit) < this.props.userListCount ? ((this.state.page)*this.state.limit) : this.props.userListCount }  of {this.props.userListCount} entries</p>
                                </div>
                                <div className="col-lg-5 text-right">
                                    <Pagination
                                        activePage={this.state.page}
                                        itemsCountPerPage={this.state.limit}
                                        totalItemsCount={this.props.userListCount}
                                        pageRangeDisplayed={3}
                                        onChange={this.handlePageChange}
                                        activeLinkClass="active"
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;
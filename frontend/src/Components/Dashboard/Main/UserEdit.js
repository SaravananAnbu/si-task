import React from 'react';

const roles = [
    { id: "Admin", name: 'Admin' },
    { id: "User", name: 'User' }
]
class AppUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            Phone: '',
            Role: '',
            isUpdate: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name ] : e.target.value })
    }
    handleSubmit(e) {
        const userData = {
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Role: this.state.Role,
            Phone: this.state.Phone
        }
        if(this.state.isUpdate) {
            userData.User_id = this.props.userDetail.User_id
            this.props.updateUserDetails(userData)
        } else {
            this.props.createUser(userData)
        }
    }
    componentWillMount() {
        if(this.props.match.path === "/users/:id") {
            this.setState({ isUpdate: true })
            const { id } = this.props.match.params;
            this.props.getUserDetails(id)
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.userDetail !== this.props.userDetail) {
            const userData = this.props.userDetail;
            this.setState({
                Name: userData.Name,
                Email: userData.Email,
                Password: userData.Password,
                Role: userData.Role,
                Phone: userData.Phone
            })
        }
    }
    render() {
        const { Name, Email, Password, Role, Phone, isUpdate } = this.state;
        return (
            <div className="row create_user">
                <div className="col-12">
                    <h4><b>{isUpdate ? 'Edit User' : 'Create User' }</b></h4>
                </div>
                <div className="col-12 mt-3">
                    <div className="card p-4">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="row">
                                    <div className="col-12">
                                        <h5>PERSONAL DETAILS</h5>
                                        <hr className="mt-0"/>
                                    </div>
                                    <div className="col-xl-4 form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            name="Name"
                                            value={Name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 form-group">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            name="Password"
                                            type="password"
                                            value={Password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 form-group">
                                        <label>Phone Number</label>
                                        <input
                                            className="form-control"
                                            name="Phone"
                                            value={Phone}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-6 form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            name="Email"
                                            type="email"
                                            value={Email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-3 form-group">
                                        <label>Role</label>
                                        <select
                                            className="form-control"
                                            name="Role"
                                            value={Role}
                                            onChange={this.handleChange}>
                                            <option value="0">Select Role</option>
                                            {
                                                roles.map((role, i) => 
                                                    <option key={i} value={role.id}>{role.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-light m-2 pl-3 pr-3">CANCEL</button>
                                <button className="btn btn-warning m-2 pl-3 pr-3" onClick={this.handleSubmit}>{ isUpdate ? 'UPDATE' : 'SUBMIT'}</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default AppUser;
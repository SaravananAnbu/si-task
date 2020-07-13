import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData)
        this.props.userLogin(userData)
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const { email, password } = this.state
        return (
            <div className="container">
                <div className="row justify-content-center" style={{ height: '100vh'}}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
                        <div className="card p-4">
                            <div className="row">
                                <div className="col-12 m-auto text-center">
                                    <h3>SIERRA OD</h3>
                                </div>
                                <div className="col-12 text-center">
                                    <h4>Login</h4>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            name="email"
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter your Email here"
                                            onChange={this.handleChange}
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            name="password"
                                            className="form-control"
                                            type="password"
                                            placeholder="Enter your Password here"
                                            onChange={this.handleChange}
                                            value={password}
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-outline-secondary pl-4 pr-4" onClick={this.handleClick}>Login</button>
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
    
export default Login;
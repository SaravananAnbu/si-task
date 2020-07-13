import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                 <div className="row justify-content-center" style={{ height: '100vh'}}>
                    <div className="col-6 m-auto text-center">
                        <h3>Sierra ODC</h3>
                        <Link to='/login' className="btn btn-outline-success mt-3 pl-4 pr-4">LOGIN</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
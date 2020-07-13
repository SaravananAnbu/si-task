import React from 'react';

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid homepage">
                    <div className="jumbotron" style={{ backgroundColor: 'transparent'}}>
                        <div className="row">
                            <div className="col-6 text-right" style={{ borderRight: '1px solid #ccc'}}>
                                <h2> 404 Error </h2> 
                            </div>
                            <div className="col-6 text-left">
                                <h6 style={{ color: '#777' , lineHeight: '40px' }}> The Page could not be found </h6> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
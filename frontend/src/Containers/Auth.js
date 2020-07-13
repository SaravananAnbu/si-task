import React from 'react';
import { connect } from 'react-redux';
import { addAlertMessage } from '../Actions/AlertMessages';
import history from '../history';

export default function(EnhancedComponet) {
    class Auth extends React.Component {
        componentWillMount() {
            if (!this.props.isAuth) {
                this.props.addAlertMessage({
                    type: 'error',
                    text: 'Please Login to Continue'
                });
                history.push('/')
            }
        }
        // componentWillUpdate(nextProps) {
        //     if (!nextProps.isAuth) {
        //         history.push('/')
        //     }
        // }
        render() {
            return(
                <EnhancedComponet {...this.props} />
            );
        }
    }
    const mapStateToProps = (state, ownProps) => {
        return {
            isAuth:state.UserReducer.isAuth
        }
    }
    return connect(mapStateToProps, { addAlertMessage })(Auth)
}

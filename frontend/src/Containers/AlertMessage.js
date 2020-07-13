import { connect } from 'react-redux';
import AlertMessageComponent from '../Components/AlertMessages/AlertMessage';
import {  deleteAlertMessage } from '../Actions/AlertMessages'

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.AlertMessages
    }
}

const AlertMessage = connect(
    mapStateToProps,
     {deleteAlertMessage}
)(AlertMessageComponent)

export default AlertMessage;
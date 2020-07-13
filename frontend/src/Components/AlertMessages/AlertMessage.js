import React from 'react';
import Alert from './Alert';

class AlertMessage extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <Alert key={message.id} message={message} deleteAlertMessage={this.props.deleteAlertMessage} />
        );
        return (
            <div>{messages}</div>
        );
    }
}

export default AlertMessage;
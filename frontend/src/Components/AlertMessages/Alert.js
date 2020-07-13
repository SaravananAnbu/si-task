import React from 'react';
import classnames from 'classnames';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.deleteAlertMessage(this.props.message.id);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.deleteAlertMessage(this.props.message.id)
        },5000)
    }

    render() {
        const { id, type, text } = this.props.message;
        return (
            <div 
                className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error',
                'alert-info': type === 'info',
                'alert-warning': type === 'warning'
                })}
                style={{ zIndex: 9999, position: 'fixed', bottom: '10%', left: '50%', transform: 'translate(-50%, 0)' }}
            >
                <button onClick={this.handleClick} 
                    className="close"
                    style={{
                        fontSize: '1.2rem',
                        color: 'white',
                        marginLeft: '3rem'
                    }}
                >
                    <span>&times;</span>
                </button>
                    {text}
            </div>    
        );
    }
}

export default Alert;
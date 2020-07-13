import React from 'react';

class Modal extends React.PureComponent {
    render () {
        return (
            <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby="lifologyModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="lifologyModalLabel">{this.props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.bodyContent}</p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.props.onCancel} data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-secondary" onClick={this.props.onConfirm} data-dismiss="modal">Confirm</button>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Modal;
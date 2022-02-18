import React, {Component} from 'react';
import './OverlayModal.styles.css';

export default class OverlayModal extends Component{
    render(){
        const {showModal, title, children} = this.props;
        return(
            <div>
                {
                    showModal?
                    <div className="overlay-modal">
                        <div className="modal-container">
                            <div className="modal-content">
                            </div>
                            <div className="modal-title">
                                {title}
                            </div>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}
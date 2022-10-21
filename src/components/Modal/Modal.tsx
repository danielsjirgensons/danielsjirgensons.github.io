import { Component } from "react";
import "./Modal.scss";

interface ModalProps {
    title?: string;
    onClose: any;
}

class Modal extends Component<ModalProps>{
    // FIXME: reset props on close
    // public static defaultProps: Partial<ModalProps> = {
    //     title: "Default Modal title"
    // };

    render() {
        return (
            <div className="modal-body">
                <div className="modal-overlay" onClick={this.props.onClose}></div>
                <div className="modal-wrapper">
                    <div className="modal-window">
                        <div className="modal-content">
                            <div className="modal-head">
                                {(this.props.title) ? <h2>{this.props.title}</h2> : ""}

                                <div className="close" onClick={this.props.onClose}>
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>

                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Modal;
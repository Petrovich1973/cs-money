import React from 'react'

const Dialog = (props) => {

    return (
        <React.Fragment>

            <div className="modal fade show" style={{display: 'block'}}>

                <div
                    className="modal-backdrop fade show"
                    style={{zIndex: 'initial'}}
                    onClick={() => props.onCloseModal(props.idx)}/>

                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="close" onClick={() => props.onCloseModal(props.idx)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        {/*<div className="modal-footer">
                            <button className="btn btn-secondary">Close</button>
                            <button className="btn btn-primary">Save changes</button>
                        </div>*/}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dialog
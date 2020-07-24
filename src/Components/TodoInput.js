import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="container"> 
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add A Todo Item Here..." value={item}
                        onChange={handleChange}></input>
                    </div>
                    <button type="submit" className={editItem ? "mt-3 btn btn-success btn-block btn-md" 
                    : "mt-3 btn btn-primary btn-block btn-md"}>
                        {editItem ? "Edit item" : "Add Item"}</button>
                </form>
            </div>
            </div>
        )
    }
}

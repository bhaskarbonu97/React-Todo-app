import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Todo.css';

class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text bg-primary text-white'>
                                <FontAwesomeIcon icon="book"></FontAwesomeIcon>
                            </span>
                        </div>
                        <input onChange={handleChange}
                            value={item}
                            type='text'
                            className='form-control text-capitalize'
                            placeholder='Enter The Text' ></input>
                    </div>
                    <button type='submit'
                        className={
                            editItem ?
                                'btn btn-block btn-success mt-3' :
                                'btn btn-block btn-primary mt-3'
                        }>
                        {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoInput

import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './Todo.css';


class TodoList extends Component {
    
    render() {
        const { items,clearList,handleDelete,handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h1 className='text-center text-capitalize'>todo list</h1>
                {items.map(item => {
                        return (
                            <TodoItem key={item.id} 
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            />
                        )
                    })
                }
             
                <button className="btn btn-danger  text-capitalize mt-5" onClick={clearList}>clear all</button>
            </ul>
        )
    }
}

export default TodoList

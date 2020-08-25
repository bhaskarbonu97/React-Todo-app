import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faBook, faPen } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import uuid from 'uuid';

library.add(faTrash, faBook, faPen);



class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    })
  }
  handleEdit = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className='text-center text-capitalize'>todo app</h1>
            <TodoInput
              editItem={this.state.editItem}
              handleSubmit={this.handleSubmit}
              item={this.state.item}
              handleChange={this.handleChange}
            ></TodoInput>
            <TodoList
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              items={this.state.items}
              clearList={this.clearList}
            ></TodoList>
          </div>
        </div>
      </div>
    )
  }
}

export default App


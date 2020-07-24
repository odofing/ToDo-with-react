import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid";



class App extends Component {

  state = {
    items: [],
    id: uuid(),
    editItem: false,
    item: ""
  };
handleChange = e => {
  this.setState({
    item: e.target.value
   
  });
};

handleSubmit = e => {
e.preventDefault();

const newItem = {
  id:this.state.id,
  title: this.state.item
 
  
}
 // console.log(newItem);

const updatedItems = [...this.state.items, newItem];

this.setState ({
  items:updatedItems,
  item: '',
  id: uuid(),
  editItem: false
});

};
// CLEAR LIST
clearList  = () => {
  this.setState ({
    items: []
  })
}

handleDelete = (id) => {
  const filteredItems = this.state.items.filter(item => item.id !== id)
  this.setState({
    items:filteredItems
    
  });
};

handleEdit = id => {
// console.log(id);
const filteredItems = this.state.items.filter(item => item.id !== id);

const selectedItem = this.state.items.find(item => item.id === id);
// console.log(selectedItem);
  this.setState({
    items:filteredItems,
    item: selectedItem.title,
    editItem: true,
    id: id
  });
};
render () {

  return (
    <div className="main"> 
    <div className="Container ">
      <div className="row bg-dark text-white mt-3">
      <div className="col-md-10 mx-auto col-md-6 mt-4"> 
      <h3 className="text-capitalize  text-center">Todo Input</h3>
      </div>
      </div>
      <TodoInput item={this.state.item} handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}/>
     <TodoList  items={this.state.items} clearList={this.clearList} 
     handleDelete={this.handleDelete}
     handleEdit={this.handleEdit}
     editItem={this.editItem}/>
    </div>
     </div>
  );
}
}

export default App;

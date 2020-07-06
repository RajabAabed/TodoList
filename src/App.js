import React, { Component } from 'react';
import TodoItem from './components/TodoItems/Todoitems';
import AddItem from './components/AddItem/Additem';

class App extends Component{

  state={
    items:[
      { id: 1, name: "Rajab", age: 20 },
      { id: 2, name: "Ahmed", age: 22 },
    ]
  }

  // deleteItem=(id)=>{
  //   let item=this.state.items;
  //   let i=item.findIndex(item => item.id === id)
  //   item.splice(i,1);
  //   this.setState({
  //     items:item
  //   })
  // }

  deleteItem = (id) => {
    let item=this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({
      items:item
    })
  }


  addItem =(item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items});
  }

  render(){
    return(
      <div className="App container">
        <h1 className="text-center">Todo List</h1> 
        <TodoItem items={this.state.items} deletitem={this.deleteItem}/>
        <AddItem add={this.addItem}/>
      </div>
    )
  }
}



export default App;

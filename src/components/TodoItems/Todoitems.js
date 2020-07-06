import React from 'react';
import './Todoitems.css';

const TodoItems =(props)=>{

    const { items, deletitem}=props;
  let length=items.length;
    const listitem = length ? (items.map(item => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deletitem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
        <p>There is no item to show</p>
    );

    return(
        <div className="listItems">
            <div>
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
            </div>
            {listitem}
        </div>
    )
}

export default TodoItems;
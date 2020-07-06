import React , {Component} from 'react';
import './Additem.css';

class AddItem extends Component{

    state={
        name:'',
        age:''
    }

    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handlesubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value===''){
            alert("add name and age");
        }else{
            this.props.add(this.state);
            this.setState({
                name: '',
                age: ''
            })
        }
        
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="Enter name ....." id="name" onChange={this.handlechange} value={this.state.name}/>
                    <input type="number" placeholder="Enter age ....." id="age" onChange={this.handlechange} value={this.state.age}/>
                    <input type="submit" value="Add Todo"/>
                </form>
            </div>
        ) 
    }
}

export default AddItem;
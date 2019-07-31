import React, { Component } from "react";
import axios from 'axios'
import "./App.css";

class App extends Component {
  state = {
    //without an axios call this would get returned as is
    inventory: []
  }
  componentDidMount(){
    //axios get returns a promise
    //without this axios get call it would 
    axios.get('/api/inventory').then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  render() {
    return (
    <div className="App">
      <header>
        <h1>THE GAS STAND CONVENIENCE STORE</h1>
      </header>
      <main>
        <h1>Inventory</h1>
        {this.state.inventory.map(item => {
          return (
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <h1>{item.item_name}</h1>
              <h1>{item.category}</h1>
              <h1>{item.quantity}</h1>
              <h1>{item.price}</h1>
            
            </div>
          )
        })}
      </main>
    </div>
    )
  }
}

export default App;

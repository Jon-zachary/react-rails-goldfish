import React, { Component } from 'react';
import './App.css';
import SingleFish from './Singlefish'
import NewFishForm from './NewFishForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: [],
      name: '',
      variety: '',
      isCreate: false,
    }
    this.getAllFish = this.getAllFish.bind(this);
    this.createFish = this.createFish.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getAllFish() {
    fetch('http://localhost:3000/fish')
      .then(res => res.json())
      .then(data => this.setState({
        fish: data,  
      }));
  };

  createFish() {
   this.setState({
     isCreate: true,
   }) 
  };

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleSubmit() {
  const body = {
    "fish": {
      "name": this.state.name,
      "variety": this.state.variety
    }
  }
  console.log(JSON.stringify(body));
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body),
  }
  fetch('http://localhost:3000/fish', init)
    .then(() => this.getAllFish())
    .catch(err => err);
}
componentDidMount() {
   this.getAllFish();
}


  render() {
    const fish = this.state.fish;
    const fishForm = (this.state.isCreate) ? <NewFishForm
    handleChange={this.handleChange}
    handleSubmit={this.handleSubmit}
    name={this.state.name}
    variety={this.state.variety}
    />
    : null
    return (
      <div className="App">
      <h1>My Goldfish</h1>
      <div className="all-fish">
      <div className="single-fish"> <h3> Name | Variety </h3> </div>
      {fish.map(el => <SingleFish
       name={el.name} 
       variety={el.variety}
       key={el.name}
       />)}
       </div>
       <button onClick={this.createFish}>Add Fish</button>
       {fishForm}
      </div>
    );
  }
}

export default App;

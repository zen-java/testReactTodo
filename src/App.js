import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleSubmit from './SingleSubmit';

class App extends Component {

 constructor(props) {
    super(props);
     this.state = {handleSubmit:{}, text: '',rowData:[],textVal:''};
   this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleChange = this.handleSubmit.bind(this);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.text}
        </p>
        <table>
        <tbody>
        <tr>
        <td>Note No</td>
        <td>Note Text</td>
        </tr>
          {this.state.rowData.map(item => (
          <tr>

           <td>{item.id}</td><td>{item.text}</td></tr>
        ))}
        </tbody>
        </table>
{this.state.textVal}
         <SingleSubmit handleChange={(a)=>this.handleChange(a)}  onClick={() => this.handleSubmit(this)}  />
      </div>
    );
  }

handleSubmit(e) {
    // e.preventDefault();
    var newitem={textVal:this.state.text};

    var newitem={id:this.state.rowData.length,text:this.state.text};

    if(this.state.rowData)
{
  this.setState((prevState) => ({
      rowData: prevState.rowData.concat(newitem),
      
    }));
}else{
 this.setState({rowData:newitem});
  
}
 
  
}
handleChange(e) {
 
    this.setState({text: e.target.value});
  }



}

export default App;

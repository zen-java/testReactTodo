import React, { Component } from 'react';


class SingleSubmit extends Component {

   constructor(props) {
    super(props);
     this.state = { text: ''};
  }
 
  render() {
    return (
      <div className="App">
      <textarea  onChange={this.props.handleChange} value={this.props.text} />
      <button  value="Submit"  onClick={() => this.props.onClick()}>Submit</button>
       


       
      </div>
    );
  }
}

export default SingleSubmit;

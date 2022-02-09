import React, {Component} from 'react';

class StateCard extends Component {
  // Constructor (always part of a class component)
  constructor(props) {
    super(props);
    this.state = {
      button1: "On!",
      button2: 0,
      button3: "You",
    };
  }

  // Functions to handle button presses.
  handleButton1 = () => {
    let currentStatus = this.state.button1
    if (currentStatus === "On!") {
        this.setState({button1: "Off..."})
    }
    else {
        this.setState({button1: "On!"})
    }
   }    
  handleButton2 = () => {
        this.setState(state => {
        state.button2 = state.button2 + 1
        return state }
    )}
    handleButton3 = () => {
        let currentStatus = this.state.button3
        if (currentStatus === "You") {
            this.setState ({button3: "are"})
          }  else {
              this.setState ({button3: "cool!"})
              if (currentStatus === "cool!")
              this.setState ({button3: "You"})
            }
        }
     
    // The render function
  render() {
    return(
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={this.handleButton1}>
              Button 1
            </button>
            <p>Current status: {this.state.button1}</p>
          </div>
          <div className="item">
            <button onClick={this.handleButton2}>
              Button 2
            </button>
            <p>Current count:{this.state.button2}</p>
          </div>
          <div className="item">
            <button onClick={this.handleButton3}>Button 3</button>
            <p>Current word:{this.state.button3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StateCard;

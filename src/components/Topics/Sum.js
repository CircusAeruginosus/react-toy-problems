import React, { Component } from "react";

export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    //create an onChange prop for the first input element that updates the value of number1 on state
    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) });
    }

    //create an onChange prop for the second input element that udpates the value of number2 on state
    updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) });
    }

    //create an onClick prop for the button element that calls a method on the class. The method should solve the toy problem and update the value of sum
    add(num1, num2) {
        this.setState({ sum: num1 + num2 });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" 
                type="number" 
                onChange={ (e) => this.updateNumber1(e.target.value) }></input>
                <input className="inputLine"
                type="number"
                onChange={ (e) => this.updateNumber2(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}
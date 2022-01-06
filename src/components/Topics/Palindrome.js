import React, { Component } from "react";

export default class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        };
    }

    //create an onChange prop for the input element that updates the value of userInput on state
    handleChange(val) {
        this.setState({ userInput: val });
    }

    //create an onClick propr for the button element that calls a method on the class. The method should solve the toy problem and update the value of the palindrome
    isPalindrome(userInput) {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split("");
        backwards = backwards.reverse();
        backwards = backwards.join("");

        if (forwards === backwards) {
            this.setState({ palindrome: "true" });
        } else {
            this.setState({ palindrome: "false" });
        }
    }

    render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input
              className="inputLine"
              onChange={(e) => this.handleChange(e.target.value)}
            ></input>
            <button
              className="confirmationButton"
              onClick={() => this.isPalindrome(this.state.userInput)}
            >
              {" "}
              Check{" "}
            </button>
            <span className="resultsBox">
              {" "}
              Palindrome: {this.state.palindrome}
            </span>
          </div>
        );
    }
}
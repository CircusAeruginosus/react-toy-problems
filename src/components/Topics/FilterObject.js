import React, { Component } from "react";

export default class FilterObject extends Component {

    //create a constructor method that creates an initial state
    constructor() {
        super();

        this.state = {
            unfilteredArrayEmployees: [
                {
                    name: "Michael Scott",
                    title: "Manager",
                    age: 45,
                },
                {
                    name: "Dwight Schrute",
                    title: "Assistant to the Regional Manager",
                    skill: "Karate",
                },
                {
                    name: "Pam Beesly",
                    skill: "Art"
                }
            ],
            userInput: "",
            filteredArrayEmployees: []
        }
    }

    //create an onChange prop for the input element that updates the value of userInput on state
    handleChange(val) {
        this.setState({ userInput: val });
    }

    //create an onClick prop for the button element that calls a method on the class
    filterEmployees(prop) {
        let unfilteredArrayEmployees = this.state.filteredArrayEmployees;
        let filteredArrayEmployees = [];

        for (let i = 0; i < unfilteredArrayEmployees.length; i++) {
            if (unfilteredArrayEmployees[i].hasOwnProperty(prop) ) {
                filteredArrayEmployees.push(unfilteredArrayEmployees[i])
            }
        }
        this.setState({ filteredArrayEmployees: filteredArrayEmployees });
    }
    
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unfilteredArrayEmployees, null, 10) } </span>
                <input className="inputLine" 
                onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArrayEmployees, null, 10) }</span>
            </div>
        )
    }
}
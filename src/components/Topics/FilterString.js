import React, { Component } from "react";

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            names: ["Michael", "Dwight", "Pam", "Jim", "Kevin", "Stanley", "Phyllis", "Angela", "Oscar"],
            userInput: "",
            filteredNames: []
        };
    }

    //creat an onChange prop for the input element that updates the value of userInput on state
    handlechange(val) {
        this.setState({ userInput: val });
    }

    //create an onClick prop for the button element taht calls a method on the class. The method should solve the toy problem and update the value of filteredNames
    filterNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({ filteredNames: filteredNames });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) }</span>
            <input className="inputLine" 
            onChange={ (e) => this.handlechange(e.target.value) }>
            </input>
            <button className="confirmationButton"
             onClick={ () => this.filterNames(this.state.userInput) }>Filter</button>
            <span className="resultsBox filterStringPB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}
//Step 1 - Import React and Component from react
import React, { Component } from "react";

//Create a basic react compenent called TopicBrowser that renders one <p> element that says "Hello World"
// export default class TopicBrowser extends Component {
//     render() {
//         return (
//              <p>Hello World</p>
//         )
//     }
// }

//Import all the topic files from src/components/Topics
import EvenAndOdd from "../Topics/EvenAndOdd"
import FilterObject from "../Topics/FilterObject"
import FilterString from "../Topics/FilterString"
import Palindrome from "../Topics/Palindrome"
import Sum from "../Topics/Sum"

//Create an outline for each topic component and have the component render a <p> element containing the name of the component. Render a parent div element containing all of the Topic components.
export default class TopicBrowser extends Component {
    render() {
        return (
            <div className="topicFeed">
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

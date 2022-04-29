import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("previous State:", prevState)
            console.log("prevProps", prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "GoodBye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    increment() {
        this.setState((prevState, PrevProps) => {
            console.log("previous State:", prevState)
            console.log("prevProps", PrevProps)
            return {
                count: prevState.count + 1
            }
        })
        console.log(this.state.count)
    }



    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>increment</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;
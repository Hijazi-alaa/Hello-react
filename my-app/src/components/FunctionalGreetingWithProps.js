import react from "react";

const FunctionalGreetingWithProbs = (props) => {
    console.log(props)
return <h1>Hello, {props.greeting} Your name: {props.name},
age:{props.age}</h1>;


}

export default FunctionalGreetingWithProbs;
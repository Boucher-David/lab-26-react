// now that I have included the babel preset 'stage-2', I can create functions using an arrow like below:

// handleChange = () = > {}

// a function declared like so will automatically have this bound to them, so you don't have to bind this later on.



'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import { say } from 'cowsay';

const main = document.getElementById('main');


class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>Generate Cowsay Lorem</header>
        )
    }
}



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "Please enter what you'd like the cow to say!"
        }
    }

    generateCowsay = () => {
        console.log("testing");
        this.setState({content: "This should be generated when clicking on button"});
    };

    render() {
        return (
            <div>
            <Heading />
            <pre>{say({ text: this.state.content})}</pre>
            <button onClick={this.generateCowsay}>Click Me to Change Cowsay</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, main);
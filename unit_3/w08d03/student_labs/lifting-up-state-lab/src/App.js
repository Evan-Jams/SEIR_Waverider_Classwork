import React from "react";
import AppHeader from "./components/Header.js";
import AppMain from "./components/Main.js";
import CardContainer from "./components/CardContainer.js"
import data from "./data.js"

class App extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            data
        }
    }
    render() {
        return (
            <div className="App">
                <AppHeader />
                <AppMain h1="Super Hero App" h2="List of Supers" h3="Good or Evil">
                    <CardContainer data={this.state.data}/>
                </AppMain>
            </div>
        );
    }
}

export default App;

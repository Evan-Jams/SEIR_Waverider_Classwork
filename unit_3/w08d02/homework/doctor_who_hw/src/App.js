import React, { Component } from 'react';
import DivOne from './components/DivOne'


class App extends Component {

    render() {
        return (
            <div>
                <DivOne tardis={this.props.tardis} changeIt={this.changeIt}/>
            </div>
        )
    }
}

export default App;

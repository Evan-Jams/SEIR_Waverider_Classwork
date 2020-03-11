import React, { Component } from 'react';
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'
import DivThree from './components/DivThree'

class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,
            }
        }
        this.changeIt = this.changeIt.bind(this)
    }
    changeIt (text) {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return (
            <div>
                <DivOne tardis={this.state.tardis} changeIt={this.changeIt}/>
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header'
import BirdCollection from './components/BirdCollection'
import birds from './data.js'
console.table(birds)


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            birds: birds,
            birdName: '',
            image: '',
            user: '',
            approved: Boolean

        }
    }
    render() {
        return(
            <div>
                <Header />
                <BirdCollection birds={this.state.birds} />
            </div>
        )
    }
}

export default App;

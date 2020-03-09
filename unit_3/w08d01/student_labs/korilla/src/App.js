import React, { Component } from 'react';
import receipts from './receipts'
import Receipt from './components/Receipt'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            receipts: receipts,
        }
    }
    render() {
        return (
            <div>
                <h1>App</h1>
                <Receipt />
            </div>
        )
    }
}

export default App;

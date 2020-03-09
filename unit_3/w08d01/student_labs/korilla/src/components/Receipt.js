import React, { Component } from 'react'
import receipts from '../receipts.js'

class Receipt extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
            <ul>
                <li>
                {this.state.person}
                </li>
            </ul>
            </div>
        )
    }
}


export default Receipt;

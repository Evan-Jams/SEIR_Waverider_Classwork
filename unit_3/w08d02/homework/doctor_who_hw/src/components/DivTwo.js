import React, { Component } from 'react'
import DivThree from './DivThree'

class DivTwo extends Component {
    render() {
        return(
            <div>
                <DivThree />
                <DivThree />
            </div>
        )
    }
}

export default DivTwo

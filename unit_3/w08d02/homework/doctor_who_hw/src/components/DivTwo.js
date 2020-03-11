import React, { Component } from 'react'
import DivThree from './DivThree'

class DivTwo extends Component {
    render() {
        return(
            <div>
                <DivThree tardis={this.props.tardis} changeIt={this.props.changeIt}/>
                <DivThree tardis={this.props.tardis} changeIt={this.props.changeIt}/>
            </div>
        )
    }
}

export default DivTwo

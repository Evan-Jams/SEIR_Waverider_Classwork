import React, { Component } from 'react'
import DivTwo from './DivTwo'

class DivOne extends Component {
    render() {
        return(
            <div>
                <DivTwo tardis={this.props.tardis} changeIt={this.props.changeIt}/>
            </div>
        )
    }
}

export default DivOne

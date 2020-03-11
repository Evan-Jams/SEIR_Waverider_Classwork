import React, { Component } from 'react'

class DivThree extends Component {
    render() {
        return(
            <div>
                <h3 onClick={() => {this.props.changeIt(this.props.tardis.name)}} >{this.props.tardis.name}
                </h3>
            </div>
        )
    }
}

export default DivThree

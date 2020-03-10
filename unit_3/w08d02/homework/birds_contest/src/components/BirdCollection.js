import React, { Component } from 'react'
import Birds from './Birds'

class BirdCollection extends Component {
    render() {
        return (
            <div>
                Bird Collection
                {
                    this.props.birds.map((bird, i) => {
                        return (
                            <Birds bird={bird} key={ i } />
                        )
                    })
                }
            </div>
        )
    }
}


export default BirdCollection

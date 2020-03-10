import React, { Component } from 'react'
import Birds from './Birds'

class BirdCollection extends Component {
    render() {
        return (
            <div>
                Bird Collection
                <ul>
                    {
                        this.props.birds.map((bird, i) => {
                            return (
                                <Birds bird={bird} key={ i } />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default BirdCollection

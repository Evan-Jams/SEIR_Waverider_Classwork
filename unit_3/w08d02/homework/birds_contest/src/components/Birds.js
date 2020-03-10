import React, { Component } from 'react'


class Birds extends Component {
    render() {
        return(
            <div>
                <p>{this.props.bird.birdName}</p>
                <img src={this.props.bird.image} alt={this.props.bird.birdName}/>
                <p>{this.props.bird.approved}</p>
            </div>

        )
    }
}

export default Birds

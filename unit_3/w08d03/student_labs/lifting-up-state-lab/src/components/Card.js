import React, { Component } from 'react'


class Card extends Component {
    render(){
        return(
            <div>
                <li>{this.props.person.name}</li>
            </div>
        )
    }
}


export default Card;

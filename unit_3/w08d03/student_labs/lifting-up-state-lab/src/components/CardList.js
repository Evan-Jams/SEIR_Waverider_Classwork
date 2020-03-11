import React, { Component } from 'react'
import Card from "./Card.js"

class CardList extends Component {
    render(){
        return(
            <ul>
                {
                    this.props.data.map((person, i) => {
                        return (
                            <Card person={person} key={ i }/>
                        )
                    })
                }

            </ul>
        )
    }
}


export default CardList;

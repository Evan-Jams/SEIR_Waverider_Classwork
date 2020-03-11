import React, { Component } from 'react'
import CardList from "./CardList.js"


class CardContainer extends Component {
    render(){
        return(
            <div>
                <CardList />
                <CardList />
            </div>
        )
    }
}


export default CardContainer;

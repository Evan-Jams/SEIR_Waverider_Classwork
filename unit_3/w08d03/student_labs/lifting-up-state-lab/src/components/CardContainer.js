import React, { Component } from 'react'
import CardList from "./CardList.js"


class CardContainer extends Component {
    render(){
        return(
            <div>
                <CardList data={this.props.data}/>
                <CardList data={this.props.data}/>
            </div>
        )
    }
}


export default CardContainer;

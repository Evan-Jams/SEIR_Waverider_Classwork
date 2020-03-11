import React, { Component } from 'react'
import CardList from "./CardList.js"


class CardContainer extends Component {
    render(){
        return(
            <div className="d-flex justify-content-around" >
                <CardList data={this.props.data.filter((person, i) => {
                    return (
                        person.alegiance === "Good"
                    )
                })}/>
                <CardList data={this.props.data.filter((person, i) => {
                    return (
                        person.alegiance === "Evil"
                    )
                })}/>
            </div>
        )
    }
}


export default CardContainer;

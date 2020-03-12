import React, { Component } from 'react'


class Score extends Component {
    render(){
        return(
            <div>
                <h3>Total: $ {this.props.total}</h3>
                <div>
                    <button onClick={this.props.updateScore} id="incorrect">Incorrect</button>
                    <button onClick={this.props.updateScore} id="correct">Correct!</button>
                    <button onClick={this.props.updateScore} id="reset">reset</button>
                </div>
            </div>
        )
    }
}

export default Score;

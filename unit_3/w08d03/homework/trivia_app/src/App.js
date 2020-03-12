import React, { Component } from 'react'
import Score from './components/Score.js'
import './index.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            baseUrl: 'http://jservice.io/api/',
            searchUrl: '',
            query: '?',
            random: 'random',
            answerHidden: true,
            total: 0,
            clue: {}
        }
        this.fetchData = this.fetchData.bind(this)
        /*this.handleChange = this.handleChange.bind(this)*/
        this.toggleData = this.toggleData.bind(this)
        this.updateScore = this.updateScore.bind(this)

    }
    /*handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })

    }*/
    fetchData(data){
        this.setState({
            searchUrl: this.state.baseUrl + data
        },
        () => {
            fetch(this.state.searchUrl)
            .then((response) => {
                return response.json()
            })
            .then(json => this.setState({clue: json[0], answerHidden: true}),
                (err) => console.log(err))
        }
        )
    }
    toggleData(){
        this.setState({answerHidden: !this.state.answerHidden})
    }
    updateScore(event){
        event.preventDefault()
        console.log('ya clicked me!');
        event.target.id === 'correct' ? (
            this.setState({total: this.state.total + this.state.clue.value}) ): event.target.id === 'incorrect' ? this.setState({total: this.state.total - this.state.clue.value}): event.target.id === 'reset' ? this.setState({total: 0, clue: {}}) : console.log('try again')
    }

    render() {
        return(
            <div className="main">
                <h1>Welcome to Jeopardy!</h1>
                {/*<h3>Category: {this.state.clue.category.title}</h3>*/}
                <h3>Question: </h3>
                <h5>{this.state.clue.question}</h5>
                <button onClick={() => {this.fetchData(this.state.random)}}>Get Random Question</button>
                <h3>Value: {this.state.clue.value}</h3>
                <Score clue={this.state.clue} total={this.state.total} updateScore={this.updateScore}/>

                {
                    this.state.answerHidden ? (
                        <h5>Answer: </h5>
                    ):(
                        <h5>Answer: {this.state.clue.answer}</h5>
                    )
                }

                <button onClick={() => {this.toggleData()}}>Click to Reveal Answer</button>
            </div>
        )
    }
}

export default App;

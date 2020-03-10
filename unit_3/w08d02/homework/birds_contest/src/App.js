import React, { Component } from 'react';
import Header from './components/Header'
import BirdCollection from './components/BirdCollection'
import birds from './data.js'
console.table(birds)


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            birds: birds,
            birdName: '',
            image: '',
            user: '',
            approved: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const newBird = {
            birdName: this.state.birdName,
            image: this.state.image,
            user: this.state.user,
            approved: this.state.approved
        }
        this.setState({
            birds: [ newBird, ...this.state.birds, newBird],
            birdName: '',
            image: '',
            user: '',
            approved: false
        })
    }
    render() {
        return(
            <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="birdName"> Bird Name
                        <input type="text" name="birdName" value={this.state.birdName} onChange={this.handleChange} />
                    </label>
                    <label htmlFor="image"> Image Url
                        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label htmlFor="user"> User's Name
                        <input type="text" name="user" value={this.state.user} onChange={this.handleChange} />
                    </label>
                    <label htmlFor="approved"> Approved
                        <select>
                            <option name="approved" value={this.state.approved}> Yes </option>
                            <option name="approved" value={this.state.approved}> No </option>
                        </select>
                    </label>
                    <input type="submit" />
                </form>
                <br />
                <BirdCollection birds={this.state.birds} />
            </div>
        )
    }
}

export default App;

import React, {Component} from 'react'

class Daters extends Component {
  constructor(props){
    super(props)
    this.state = {
      daters: []
    }
  }
  componentDidMount(){
    this.getDaters()
  }
  getDaters(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(jsonDaters => this.setState({daters: jsonDaters}))
    .catch(error => console.error(error))
  }
  render(){
    return(
      <h1>Hello Dating App</h1>
    )
  }
}

export default Daters;

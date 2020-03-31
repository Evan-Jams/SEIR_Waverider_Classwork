import React, {Component} from 'react';
import './App.css';
import LineChart from './components/LineChart'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      iceCreams: []
    }
    this.getIceCreams = this.getIceCreams.bind(this)
  }
  componentDidMount(){
    this.getIceCreams()
  }
  async getIceCreams(){
    try{
      const response = await fetch('/ice_creams')
      const iceCreams = await response.json()
      this.setState({ iceCreams:[...iceCreams] })
      console.log(this.state.iceCreams)
    }catch (err){
      console.error(err)
    }
  }
  render(){
    return (
      <div className="App">
        <h1>This is where Ice Creams Flourish</h1>
        <LineChart id={1}/>
        <LineChart id={2}/>
      </div>
    )
  }
}

export default App;

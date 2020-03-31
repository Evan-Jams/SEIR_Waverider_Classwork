import React, {Component} from 'react';
import BarChart from './components/BarChart.js'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations: []
    }
    this.getLocations = this.getLocations.bind(this)
  }
  componentDidMount(){
    this.getLocations()
  }
  async getLocations(){
    try{
      const response = await fetch('/locations')
      const locations = await response.json()
      this.setState({ locations:[...locations] })
      console.log(this.state.locations)
    }catch (err){
      console.error(err)
    }
  }
  render(){
    return (
      <div className="App">
        <BarChart id={1}/>
        <BarChart id={2}/>
      </div>
    );
  }
}


export default App;

import React, {Component} from 'react';
import './App.css';
import Daters from './components/Hello.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }
  render(){
    return (
      <div className="App">
        <Daters />
      </div>
    )
  }
}

export default App;

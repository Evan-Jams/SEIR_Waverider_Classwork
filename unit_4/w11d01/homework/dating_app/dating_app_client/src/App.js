import React, {Component} from 'react';
import Daters from './components/Dater.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Match from './components/Match.js'

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
        <Header />
        <div className="main-content">
          <div className="people">
            <Daters />
          </div>
          <div className="dating-pedestal">
            <Match />
          </div>
          <div className="people">
            <Daters />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

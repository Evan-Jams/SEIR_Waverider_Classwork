import React, {Component} from 'react'

class Daters extends Component {
  constructor(props){
    super(props)
    this.state = {
      daters: [],
      matches: []
    }
  }
  componentDidMount(){
    this.getDaters()
  }
  getDaters(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(jsonDaters => {
      let matches = jsonDaters.splice(0, Math.ceil(jsonDaters.length / 2))
      this.setState({
        daters: jsonDaters,
        matches: matches
      })
    })
    .catch(error => console.error(error))
  }
  render(){
    return(
      <>
        {
          this.state.daters.map(dater => {
            return (
              <div className="dater" key={dater.id}>
                <h3>Name: {dater.name} </h3>
                <img src={dater.img} alt={dater.name}/>
                <h4>Starsign: {dater.starsign} </h4>
                <h4>Age: {dater.age} </h4>
                {dater.ltl
                  ? <h5> Loves to laugh and have a good time</h5>
                  : <h5> Hates laughing, does not like having a good time</h5>
                }
            </div>
            )
          })
        }
      </>
    )
  }
}

export default Daters;

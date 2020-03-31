import React from 'react'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      starsign: '',
      age: '',
      img: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (event) {
    this.setState({[event.target.id] : event.target.value})
  }

  handleSubmit(event){
  event.preventDefault()
  fetch('http://localhost:3000/users', {
    body: JSON.stringify(this.state),
    method: 'POST',
    headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
    }
  })
  .then(createdUser => {
    return createdUser.json()
  })
  .then(jsonedUser=> {
    console.log(jsonedUser);
    this.setState({
      name: '',
      starsign: '',
      age: '',
      img: ''
    })
  }).catch(error => console.error(error))
}

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name={'name'}
          placeholder={'Name'}
          type={'text'}
          value={this.state.name}
          id={'name'}
         />
       <input
           onChange={this.handleChange}
           name={'starsign'}
           placeholder={'Starsign'}
           type={'text'}
           value={this.state.starsign}
           id={'starsign'}
        />
      <input
          onChange={this.handleChange}
          name={'age'}
          placeholder={'Age'}
          type={'number'}
          value={this.state.age}
          id={'age'}
       />
     <input
         onChange={this.handleChange}
         name={'img'}
         placeholder={'img'}
         type={'text'}
         value={this.state.img}
         id={'img'}
      />
    <input type="submit"></input>
      </form>
    )
  }
}

export default Form

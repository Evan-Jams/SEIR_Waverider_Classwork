import React from 'react'

class NewForm extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    title: '',
    url: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

}
handleChange (event) {
  this.setState({ [event.currentTarget.id]: event.currentTarget.value})
}
async handleSubmit (event) {
    event.preventDefault()
    try{
    let response = await fetch(this.props.baseURL + '/bookmarks', {
        method: 'POST',
        body: JSON.stringify({title: this.state.title, url: this.state.url}),
        headers: {
            'Content-Type': 'application/json'
        }
  })
  let data =  await response.json()
  this.props.handleAddBookmark(data)
      this.setState({
        title: '',
        url: ''
      })
  }catch(e){
    console.error({'Error': e})
    }

}
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Add a bookmark"/>

        <label htmlFor="url"></label>
        <input type="text" id="url" name="url" onChange={this.handleChange} value={this.state.url} placeholder="Link Your Site"/>

        <input type="submit" value="Add A New Bookmark"/>
      </form>
    )
  }
}
export default NewForm

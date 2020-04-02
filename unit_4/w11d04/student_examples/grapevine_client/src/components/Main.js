// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Post from './Post.js'
import Form from './Form.js'

// =============================
// COMPONENT CLASS
// =============================
class Main extends React.Component {
  state = {
    posts: []
  }
  componentDidMount(){
    this.fetchPosts()
  }

  fetchPosts = async () => {
    let response = await fetch('http://localhost:3000/posts')
    let data = await response.json()
    console.log(data);
    this.setState({ posts: data })
  }

  handleCreate = async createData => {
    let response = await fetch('http://localhost:3000/posts', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data)
    this.props.handleView('home')
    this.setState( prevState => {
      return {
        posts: [...prevState.posts, data]
      }
    })
  }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
      <h1>{this.props.view.pageTitle}</h1>
      {
        this.props.view.page === 'home'
        ? this.state.posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleView={this.props.handleView}
          />
        ))
        : <Form
            handleCreate={this.handleCreate}
            formInputs={this.props.formInputs}
          />
      }
      </main>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main

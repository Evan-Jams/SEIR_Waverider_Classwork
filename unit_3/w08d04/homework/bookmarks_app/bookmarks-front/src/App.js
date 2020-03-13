import React, { Component } from 'react'
import NewForm from './components/NewForm.js'


let baseURL = ''


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'Heroku url'
}



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookmarks: []
        }
        this.getBookmarks = this.getBookmarks.bind(this)
        this.handleAddBookmark = this.handleAddBookmark.bind(this)
    }
    componentDidMount(){
        this.getBookmarks()
    }
    async getBookmarks(){
        try {
            let response = await fetch(`${baseURL}/bookmarks`)
            let data = await response.json()
            this.setState({bookmarks: data})
        }catch(e){
            console.error(e);
        }
    }
    handleAddBookmark(bookmark) {
      const copyBookmarks = [bookmark, ...this.state.bookmarks]
      this.setState({
        bookmarks: copyBookmarks,
        title: '',
        url: ''
      })
    }
    render(){
        return (
            <div className="main">
                <header>Bookmark Your Favorite Places!</header>
                <div className="form-container">
                    <NewForm handleAddBookmark={this.handleAddBookmark} baseURL={baseURL}/>
                </div>
                <div className="list">
                    <ul>
                        {
                            this.state.bookmarks.map(bookmark => {
                                return (
                                    <li key={bookmark._id}>
                                        <a id={bookmark._id} href={bookmark.url}>{bookmark.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default App

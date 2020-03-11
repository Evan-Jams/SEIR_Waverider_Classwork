import React, { Component } from 'react'

class MovieInfo extends Component {
    render() {
        return(
            <div>
                <h1>Title: {this.props.movie.Title}</h1>
                <h3>Genre: {this.props.movie.Genre}</h3>
                <p>Plot: {this.props.movie.Plot}</p>
            </div>
        )
    }
}

export default MovieInfo

import React, { Component } from 'react'

class MovieDetails extends Component {
    render() {
        const match = this.props.match
        const movieID = parseInt(match.params.movieID)
        const movie = this.props.state.movies.find(m => m.id === movieID)

        return (
            <div>
                <div id="movie-container">
                    <h1>{movie.title}</h1>
                    <img src={movie.img} alt="" />
                    <div> {movie.year}</div>
                    <div>{movie.descrShort}</div>
                </div>
            </div>
        )
    }
}

export default MovieDetails

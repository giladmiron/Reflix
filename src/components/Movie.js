import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Movie extends Component {
    changeRentingStatus = (id) => {
        this.props.changeRentingStatus(this.props.id)
        this.props.decreaseData(this.props.text)
    }

    render() {
        return (
            <div className='movie'>
                <Link to={`/movies/${this.props.id}`}><img src={this.props.url} /></Link>
                <button onClick={this.changeRentingStatus}>{this.props.text}</button>
            </div>
        )
    }
}
export default Movie

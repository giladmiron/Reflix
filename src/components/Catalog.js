import React, { Component } from 'react'
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            searchPut: '',
            budget: 50,
        }
    }

    changeSearchInput = (event) => {
        this.setState({
            searchPut: event.target.value
        }, function () {
            console.log(this.state.searchPut)
        })
    }

    decreaseData = (text) => {
        let newBudget = this.state.budget
        text == "Rent me" ? newBudget -= 3 : newBudget += 3
        this.setState({
            budget: newBudget
        })
    }

    render() {

        return (
            <div className='catalog'>
                <input type="text" value={this.state.searchPut} onChange={this.changeSearchInput} placeholder="Search"></input>
                <span>Budget {this.state.budget}</span>
                <div className="rented">
                    {this.props.movies.some(m => m.isRented) ? this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.searchPut)).filter(m => m.isRented).map(m => <Movie changeRentingStatus={this.props.changeRentingStatus} id={m.id} url={m.img} text="Unrent me" decreaseData={this.decreaseData} />) : null}
                </div>
                <div className="movies">
                    {this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.searchPut)).filter(m => m.isRented == false).map(m => <Movie changeRentingStatus={this.props.changeRentingStatus} id={m.id} url={m.img} text="Rent me" decreaseData={this.decreaseData} />)}
                </div>
            </div>
        )
    }
}

export default Catalog

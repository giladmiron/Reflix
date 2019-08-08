import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [{ name: 'Gilad'}, { name: 'Lior'}, { name: 'Eran'}],
        }
    }
    render() {
        return (
            <div>
                Who's Watching?
                <div className='users'>
                    {this.state.users.map(u => <Link to='/catalog'><div className='user'> {u.name}</div></Link>)}
                </div>
            </div>
        )
    }
}

export default Landing

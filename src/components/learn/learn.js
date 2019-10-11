import React from 'react'
import { Route, Link } from 'react-router-dom'
import './learn.css'

export default class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/fact')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    response
                })
            })
            .catch(e => {
                console.error({e})
            })
    }

    render() {
        return (
            <div className='learnPage'>
                <div>
                    <div className='factContainer'>
                        <p className='learnFact'>{this.state.response.fact}</p>
                    </div>
                    

                    <Route
                        exact
                        path='/learn'
                        render={() =>
                            <Link style={{ textDecoration: 'none' }} to='/learntwo'><button className='learnButtons'>Next</button></Link>
                        }
                    />
                    <Route 
                        exact
                        path='/learntwo' 
                        render={() =>   
                            <Link 
                                style={{ textDecoration: 'none' }}to='/user'>
                                    <button className='learnButtons'>Create User</button>
                            </Link>
                        }
                    />
                </div>
            </div>
        )
    }
}
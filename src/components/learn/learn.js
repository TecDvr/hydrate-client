import React from 'react'
import { Route, Link } from 'react-router-dom'

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
                console.log(this.state.response);
            })
            .catch(e => {
                console.error({e})
            })
    }

    render() {
        return (
            <div className='learn one'>
                <div>
                    
                    <p>{this.state.response.id}</p>
                    <p>{this.state.response.fact}</p>

                    <Route
                        exact
                        path='/learn'
                        render={() =>
                            <Link style={{ textDecoration: 'none' }} to='/learntwo'><button>Next</button></Link>
                        }
                    />
                    <Route 
                        exact
                        path='/learntwo' 
                        render={() =>   
                            <Link 
                                style={{ textDecoration: 'none' }}to='/user'>
                                    <button>Create User</button>
                            </Link>
                        }
                    />
                </div>
            </div>
        )
    }
}
import React from 'react'
import { Route, Link } from 'react-router-dom'
import './learn.css'
import MenuButton from '../menuMain/menuButton/menuButton';

export default class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response: []
        }
    }

//VERSION 2
    // componentDidMount() {
    //     fetch('https://powerful-scrubland-63666.herokuapp.com/api/fact')
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({
    //                 response
    //             })
    //         })
    //         .catch(e => {
    //             console.error({e})
    //         })
    // }

    // {this.state.response.fact}

    render() {
        return (
            <div>
                <MenuButton />
                    <Route
                        exact
                        path='/learn'
                        render={() =>
                            <div className='learnPage'>
                                <h1 className='learnTitle'>Do you drink enough water?</h1>
                                <img className='learnImg' src='https://lh3.googleusercontent.com/JfdHhSMoPa2Ig5jR1lYtJgKQR6sUa_4UpZgzg-cl8fqWUFue9bGX6IOK3eHP1XfpnjV4xJ0RwOjxxFgMoYpHliOlbYsYXSAre3IUVvvNsu4rRXN95h89g6_cUWGrGlzLBFfgQGKGW9R7CvSY80SDm5U_eN_HJ3P5WKF-5TmV7teDSovpTgkw-oJmfDxqJpDdH4QrFXm_qRIdiAQHnt6Kb1PZLXAwMdlzD_POpomgAEROdbqqMFAOxltHF_EXgR3A29XJNntnQd_ItAzC8D7JdyWPM8AnstoLrRd6SqFp1524OkuA190Oshte4bu_iyRksozvk2bc8iQp2cM3Akuyvw-fERNCVxIob7q-ApTkyFG6zZ3GkK396Uf6xtymQnQMHJzFYZjx5wBypezhRMzW3dwC9Yt_ptNlHOZkJUhf8_8k717DhY4R15L2xSMXy0YDc4vjozs3VcQXPbcn1NA4qoTWt4TiM0UXfCYofPZMQDrBC_eZYWxE2q4492phUAeXN2M8OQQbPRvzf3yZmbPb8GoKihI3pRoi8f_jn2ha9nJcQkiYpM-AkYzQ8WWMcQ_bDo-fPgXygl6kUBV93aIPNXLXJLxAIOyl3cqvZl4CAieNEKeFwyIWtMODnz_hjzs4sdgMjccT9ZokL7SNKxk3q6JxTMrJvIAUZ_usKHwjJGWsVy3y9kNn_cS2mZWozelekUfV9sLXdMtIdJHdfr1bpO-sHQgTpy8JcCWDQfa2zL_miU2s=w450-h501-no' alt='water drop'/>
                                <div className='factContainer'>
                                    <p className='learnFact'>The human brain is made up of 73% water. Dehydration will do nothing but stop those million dollar ideas from flowing from you!</p>
                                    <p className='learnFact'>It is recommended that the average adult drink 8, 8oz glasses of water a day. That seems like a lot to keep track of!</p>
                                </div>
                                <Link style={{ textDecoration: 'none' }} to='/learntwo'><button className='learnButtons one'>Next</button></Link>
                            </div>
                        }
                    />
                    <Route 
                        exact
                        path='/learntwo' 
                        render={() =>   
                            <div className='learnPage'>
                                <h1 className='learnTitle'>HYDRATE!</h1>
                                <img className='learnImg' src='https://lh3.googleusercontent.com/BavoTmwexvIf30cQCzw04T6eVyZ0jP1DpjVUF7a9zPgt0kTPOXUZLYJhNGGsk83Tm4kIPR6DkHuB6k3yz0GyftJN2pF5v17Sqr6TwC2Xdddwoz3s6VNxQbZnBRTutpg6Gya8UixeJJbJ2uIlobdryoSyX1j2C21kxz_flWJVWr89nPctjzvaf0jm973ySIwXAQyZzK5O1mkk6SGM1yGfsfd7mETXt6LKot1Kc1BnVvKdsAUhk1QcNYrCMpgLoyL3TwRLINduh3LNDj-4DOf5-GNeQ9rdYyodvP2L9Sxq5rCuZ13Uc8tW2dU5XuTva2XzAFF80-r88QLC5A-fxsiAvjNEy1QaYKe1LPfFO8z5b4IA5GNe1kTimli2xft-ihRO8UHxp64x6cqa2_F6kzB5beddep0CKPbEHWz3pjQDBp3cNwjfd2nq_HybGUrSQBwNYSF2M-nItWPOQCndlUvT0nyMq0erg1G4Z8zXwwn0p8dPPlcKp2YyWcFX1sEuQzq3upH0LpMvj1AClGsGgYl0j01UZ4iRRJf8hp62k_LB_fWprqSX_zR3H3yuEcw1XLzNHct8ILghz3m2Lp0f6wbVdCiCOvfnFbbtCRmJN72iOmyZNsC6JU_k9OCSxuafPUfpj1iTC3H6-fwM6fLDZ0SVNwakp1sw-wkmjWXElj87Xf3gRyzOpkEGsafdkeVQuc-V9_mefN1uKG-wmcvXTSLPNS5zsPKq3J7QOMVWLvBXOiMojUCB=w431-h500-no' alt='water drop'/>
                                <div className='factContainer'>
                                    <p className='learnFact'>Hydrate allows you to keep track of your water intake by selecting your daily water goal during registration and adding the amount you have consumed throughout the day!</p>
                                    <p className='learnFact'>So kick back with a cold glass of H20 and water your life!</p>
                                </div>
                                <Link 
                                style={{ textDecoration: 'none' }}to='/user'>
                                    <button className='learnButtons two'>Create User</button>
                                </Link>
                            </div>
                        }
                    />
            </div>
        )
    }
}
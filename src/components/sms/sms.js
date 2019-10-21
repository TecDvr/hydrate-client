import React from 'react';
import './sms.css';

export default class SMS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                recipient: '',
                textmessage: ''
        }
    }

    //setInterval

    sendText() {
        let now = new Date()
        console.log(now)

        fetch(`http://localhost:8000/sms?recipient=${this.state.recipient}&sms=${this.state.textmessage}`)
            .catch(e => console.error(e))
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.sendText()
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>to:</label>
                    <input 
                        type='text'
                        onChange={e => this.setState({recipient:e.target.value})}
                    />
                    <label>sms</label>
                    <input 
                        type='text'
                        onChange={e => this.setState({textmessage:e.target.value})}
                    />
                    <button type='submit'>send</button>
                </form>
            </div>
        )
    }
} 
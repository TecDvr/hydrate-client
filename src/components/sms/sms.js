import React from 'react';

export default class SMS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: {
                recipient: '',
                textmessage: ''
            }
        }
    }

    sentSMS() {
        const text = this.state
        fetch(`http://localhost:8000/sms/send-text?-${text.recipient}&textmessage-${text.textmessage}`)
            .catch(e => console.error(e))
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.sentSMS();
    }

    render() {
        return (
            <div>
                <form>
                    <label>to:</label>
                    <input 
                        type='text'
                        onChange={e=>this.setState({recipient:e.target.value})}
                    />
                    <label>sms</label>
                    <input 
                        type='text'
                        onChange={e=>this.setState({textmessage:e.target.value})}
                    />
                    <button type='submit'>send</button>
                </form>
            </div>
        )
    }
} 
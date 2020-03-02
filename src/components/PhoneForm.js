import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        const style = {
            width: '400px',
            fontSize: '40px'
        }
        return (
            <form  onSubmit={this.handleSubmit}>
                <input
                    style={style}
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    style={style}
                    placeholder="phone number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default PhoneForm;
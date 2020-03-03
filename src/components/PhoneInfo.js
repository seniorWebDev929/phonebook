import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: "name",
            phone: "000-0000-0000",
            id: 0
        }
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone
        } = this.props.info;
    
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        )
    }
}

export default PhoneInfo;
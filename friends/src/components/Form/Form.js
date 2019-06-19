import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-container">
                <form className="form">
                    <input  
                        id="1" 
                        className="input" 
                        placeholder="name"
                        value={this.props.name} 
                        onChange={this.props.change} 
                    />
                    <input 
                        id="2" 
                        className="input" 
                        placeholder="age" 
                        value={this.props.age}
                        onChange={this.props.change} 
                    />
                    <input 
                        id="3" 
                        className="input" 
                        placeholder="email" 
                        value={this.props.email}
                        onChange={this.props.change} 
                    />
                    <button className="button" onClick={this.props.click}>Add</button>
                </form>
            </div>
        )
    }
}
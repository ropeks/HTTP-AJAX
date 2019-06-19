import React from 'react';
import '../App.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-container">
                <form className="form">
                    <input className="input" placeholder="name" />
                    <input className="input" placeholder="age" />
                    <input className="input" placeholder="email" />
                    <button className="button">Add</button>
                </form>
            </div>
        )
    }
}
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
                    <input className="input" placeholder="name" />
                    <input className="input" placeholder="age" />
                    <input className="input" placeholder="email" />
                    <button className="button" onClick={(e) => {e.preventDefault()}}>Add</button>
                </form>
            </div>
        )
    }
}
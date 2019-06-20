import React from 'react';
import './form.css';

export default class UpdateForm extends React.Component {

    render() {
        return (
            <div className="form-container">
                <form className="form">
                    <input  
                        name="name" 
                        className="input" 
                        placeholder="name"
                        //value={this.props.friends.name}  
                    />
                    <input 
                        name="age" 
                        className="input" 
                        placeholder="age" 
                        type="number"
                        //value={this.props.friends.age}
                    />
                    <input 
                        name="email" 
                        className="input" 
                        placeholder="email" 
                        //value={this.props.friends.email}
                    />
                    <button className="button">Update</button>
                    <button className="button">Delete</button>
                </form>
            </div>
        )
    }
}
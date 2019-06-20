import React from 'react';
import './form.css';

export default class UpdateForm extends React.Component {

    render() {
        return (
            <div className="form-container" onSubmit={(event) => this.props.submit(event, 'updateForm')}>
                <form className="form">
                    <input  
                        name="name" 
                        className="input" 
                        placeholder="name"
                        onChange={(event) => this.props.change(event, 'friendToUpdate')}
                        //value={this.props.friendToUpdate.name}  
                    />
                    <input 
                        name="age" 
                        className="input" 
                        placeholder="age" 
                        type="number"
                        onChange={(event) => this.props.change(event, 'friendToUpdate')}
                        //value={this.props.friendToUpdate.age}
                    />
                    <input 
                        name="email" 
                        className="input" 
                        placeholder="email"
                        onChange={(event) => this.props.change(event, 'friendToUpdate')} 
                        //value={this.props.friendToUpdate.email}
                    />
                    <button className="button">Update</button>
                    <button className="button">Delete</button>
                </form>
            </div>
        )
    }
}
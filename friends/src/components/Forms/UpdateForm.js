import React from 'react';
import './form.css';

export default class UpdateForm extends React.Component {

    render() {
        const id = this.props.selectedFriend;
        return (
            <div className="form-container" onSubmit={(e) => this.props.submit(e, 'updateForm')}>
                <form className="form">
                    <input  
                        name="name" 
                        className="input" 
                        placeholder="name"
                        onChange={(e) => this.props.change(e, 'friendToUpdate')}
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
                        onChange={(e) => this.props.change(e, 'friendToUpdate')} 
                        //value={this.props.friendToUpdate.email}
                    />
                    <button className="button">Update</button>
                    <button className="button" onClick={() => this.props.delete(id)}>Delete</button>
                </form>
            </div>
        )
    }
}
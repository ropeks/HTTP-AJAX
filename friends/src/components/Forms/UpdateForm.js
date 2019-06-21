import React from 'react';
import './form.css';

export default class UpdateForm extends React.Component {

    render() {
        const id = this.props.selectedFriend;
        return (
            <div className="form-container" onSubmit={(e) => this.props.submit(e, 'updateForm')}>
                <form className="form" autoComplete="off">
                    <input  
                        name="name" 
                        className="input" 
                        placeholder="name"
                        autoComplete="off"
                        value={this.props.friendToUpdate.name}  
                        onChange={(e) => this.props.change(e, 'friendToUpdate')}
                    />
                    <input 
                        name="age" 
                        className="input" 
                        placeholder="age" 
                        type="number"
                        autoComplete="off"
                        value={this.props.friendToUpdate.age}
                        onChange={(event) => this.props.change(event, 'friendToUpdate')}
                    />
                    <input 
                        name="email" 
                        className="input" 
                        placeholder="email"
                        autoComplete="off"
                        value={this.props.friendToUpdate.email}
                        onChange={(e) => this.props.change(e, 'friendToUpdate')} 
                    />
                    <button className="button">Update</button>
                    <button className="button" onClick={() => this.props.delete(id)}>Delete</button>
                </form>
            </div>
        )
    }
}
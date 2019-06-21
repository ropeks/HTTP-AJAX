import React from 'react';
import './form.css';

export default class AddForm extends React.Component {

    render() {
        return (
            <div className="form-container" autoComplete="off">
                <form className="form" onSubmit={(e) => this.props.submit(e, 'addForm')}>
                    <input  
                        name="name" 
                        className="input" 
                        placeholder="name"
                        autoComplete="off"
                        value={this.props.newFriend.name} 
                        onChange={(e) => this.props.change(e, 'newFriend')} 
                    />
                    <input 
                        name="age" 
                        className="input" 
                        placeholder="age" 
                        type="number"
                        autoComplete="off"
                        value={this.props.newFriend.age}
                        onChange={(e) => this.props.change(e, 'newFriend')} 
                    />
                    <input 
                        name="email" 
                        className="input" 
                        placeholder="email"
                        autoComplete="off" 
                        value={this.props.newFriend.email}
                        onChange={(e) => this.props.change(e, 'newFriend')} 
                    />
                    <button className="button">Add</button>
                </form>
            </div>
        )
    }
}
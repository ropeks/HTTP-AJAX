import React from 'react';
import { NavLink } from 'react-router-dom';
import './friends.css';

export default class FriendsList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.friends.map(friend => (
                        <NavLink 
                            to={`/friend/${friend.id}`} 
                            key={friend.id} 
                            className="nav-link" 
                            activeClassName={this.props.selectedFriend && 'active'}
                        >
                                <div id={friend.id} onClick={this.props.friendClick} className="friend">
                                    <strong id={friend.id} >{friend.name}</strong>, 
                                    {friend.age} - 
                                    <span id={friend.id}  className="email">
                                        {friend.email}
                                    </span>
                                </div>
                        </NavLink>
                        
                    ))
                }
            </div>
        );
    }
} 
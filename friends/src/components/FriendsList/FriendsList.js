import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import './friends.css';

export default class FriendsList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.friends.map(friend => (
                        <NavLink to={`/friend/${friend.id}`} className="nav-link" activeClassName="active">
                                <div id={friend.id} className="friend">
                                    <strong>{friend.name}</strong>, {friend.age} - <span className="email">{friend.email}</span>
                                </div>
                        </NavLink>
                        
                    ))
                }
            </div>
        );
    }
} 
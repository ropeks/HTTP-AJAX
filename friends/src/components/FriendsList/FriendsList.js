import React from 'react';
import './friends.css';

export default class FriendsList extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.friends.map(friend => (
                        <div key={friend.id} className="friend">
                            <div>
                                <strong>{friend.name}</strong>, {friend.age} - <span className="email">{friend.email}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
} 
import React from 'react';
import '../App.css';

export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.friends.map(friend => (
                        <div key={friend.id} className="friend">
                            <div>
                                <strong>{friend.name}</strong>, 35 - <span className="email">{friend.email}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
} 
import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: null
    }
  }

  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
  
}

export default App;

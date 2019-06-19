import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  fetchData = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="app">
        <div className="caption">This is my friends list:</div>
        <FriendsList friends={this.state.friends} />
        <div className="caption">You can also add new friend</div>
        <Form />
      </div>
    )
  }
}

export default App;

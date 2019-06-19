import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import FriendsList from './components/FriendsList/FriendsList';
import Form from './components/Form/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: "",
      newAge: "",
      newEmail: ""
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

  changeHandler = (e) => {
    e.target.id === "1" &&
    this.setState({ newName: e.target.value });
    e.target.id === "2" &&
    this.setState({ newAge: e.target.value });
    e.target.id === "3" &&
    this.setState({ newEmail: e.target.value });
  }

  clickHandler = (e) => {
    e.preventDefault();
    this.addFriend();
  }

  addFriend = () => {
    if (this.state.newName && this.state.newAge && this.state.newEmail ) {
      let newState = this.state.friends.slice();
      let newFriend = { 
        id: uuid(),
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      }
      newState.push(newFriend);
      this.setState({ 
        friends: newState,
        newName: "",
        newAge: "",
        newEmail: ""
      });
    } else {
      alert('you forgot to fill something in');
    }
  }

  render() {
    return (
      <div className="app">
        <div className="caption">My friends list:</div>
        <FriendsList friends={this.state.friends} />
        <div className="caption">You can add new friends</div>
        <Form 
          name={this.state.newName}
          age={this.state.newAge}
          email={this.state.newEmail}
          change={this.changeHandler} 
          click={this.clickHandler} 
        />
      </div>
    )
  }
}

export default App;

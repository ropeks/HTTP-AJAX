import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList';
import AddForm from './components/Forms/AddForm';
import UpdateForm from './components/Forms/UpdateForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  onChange = (e, sliceOfState) => {
    e.persist();
    this.setState(prevState => ({
      [sliceOfState]: {
        ...prevState[sliceOfState],
        [e.target.name]: e.target.value
      }
    }));
  }

  onSubmit = (e, formName) => {
    e.preventDefault();
    formName === 'addForm' &&
    this.addFriend();
    formName === 'updateForm' &&
    console.log('item updated');
  }

  addFriend = () => {
    this.state.newFriend.age && 
    this.state.newFriend.name && 
    this.state.newFriend.email &&
    axios
    .post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      this.setState({
        friends: response.data,
        newFriend: {
          name: '',
          age: '',
          email: ''
        }
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="app">
        <div className="caption">My friends list:</div>
        <FriendsList friends={this.state.friends} />
        <AddForm 
          newFriend={this.state.newFriend}
          change={this.onChange} 
          submit={this.onSubmit} 
        />
        <UpdateForm friends={this.state.friends} />
      </div>
    )
  }
}

export default App;

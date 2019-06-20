import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
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
      },
      selectedFriend: '',
      friendToUpdate: null
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

  onFriendClick = (e) => {
    if (!this.state.selectedFriend) {
      this.setState({ selectedFriend: e.target.id }, function () {
        this.populateUpdateForm();
      });
    } else if (this.state.selectedFriend === e.target.id) {
      this.setState({ selectedFriend: '' }, function () {
        this.props.history.replace(`/`);
      });
    } else {
      this.setState({ selectedFriend: e.target.id }, function () {
        this.populateUpdateForm();
      });
    }
  }

  populateUpdateForm = () => {
    let friend = this.state.friends.filter(friend => friend.id.toString() === this.state.selectedFriend);
    this.setState({ friendToUpdate: friend[0] }, function () {
      this.props.history.replace(`/friend/${this.state.friendToUpdate.id}`);
    });
    
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
        <FriendsList 
          friends={this.state.friends} 
          friendClick={this.onFriendClick} 
          selectedFriend={this.state.selectedFriend}
          friendToUpdate={this.state.friendToUpdate}
        />
        <Route 
          exact
          path="/"
          render={(props) => 
            <AddForm 
              {...props}
              newFriend={this.state.newFriend}
              change={this.onChange} 
              submit={this.onSubmit} 
            />
          } 
        />
        <Route 
          exact
          path="/friend/:id"
          render={(props) => 
            <UpdateForm 
              {...props} 
              friends={this.state.friends} 
              selectedFriend={this.state.selectedFriend} 
              friendToUpdate={this.state.friendToUpdate}
            />
          } 
        />
      </div>
    )
  }
}

export default App;

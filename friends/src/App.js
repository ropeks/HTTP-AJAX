import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
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
      friendToUpdate: {
        name: '',
        age: '',
        email: ''
      },
      selectedFriend: ''
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
    this.updateFriend();
  }

  onFriendClick = (e) => {
    if (!this.state.selectedFriend) {
      this.setState({ selectedFriend: e.target.id }, function () {
        this.populateUpdateForm();
      });
    } else if (this.state.selectedFriend === e.target.id) {
      this.setState({ 
        friendToUpdate: {
          name: '',
          age: '',
          email: ''
        },
        selectedFriend: ''
      }, function () {
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

  updateFriend = () => {
    const friend = this.state.friendToUpdate;
    friend.age && 
    friend.name && 
    friend.email &&
    axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(response => {
      this.props.history.replace('/');
      this.setState({ 
        friends: response.data,
        friendToUpdate: {
          name: '',
          age: '',
          email: ''
        },
        selectedFriend: ''
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteFriend = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.props.history.replace('/');
      this.setState({
        friends: response.data,
        friendToUpdate: {
          name: '',
          age: '',
          email: ''
        },
        selectedFriend: ''
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route 
            exact
            path="/"
            render={(props) => 
              <>
                <div className="caption">My friends list:</div>
                <FriendsList 
                  friends={this.state.friends} 
                  friendClick={this.onFriendClick} 
                  selectedFriend={this.state.selectedFriend}        
                />
                <AddForm 
                  {...props}
                  newFriend={this.state.newFriend}
                  change={this.onChange} 
                  submit={this.onSubmit} 
                />
              </>
            } 
          />
          <Route 
            exact
            path="/friend/:id"
            render={(props) => 
              <>
                <div className="caption">My friends list:</div>
                <FriendsList 
                  friends={this.state.friends} 
                  friendClick={this.onFriendClick} 
                  selectedFriend={this.state.selectedFriend}        
                />
                <UpdateForm 
                  {...props} 
                  selectedFriend={this.state.selectedFriend}
                  friendToUpdate={this.state.friendToUpdate}
                  change={this.onChange} 
                  submit={this.onSubmit}
                  delete={this.deleteFriend}
                />
              </>
            } 
          />
        </Switch>
      </div>
    )
  }
}

export default App;

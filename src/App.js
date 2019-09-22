/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserPage from './Component/UserPage';
import ProfilePage from './Component/ProfilePage';

class App extends Component {
  // initialize the state and bind the function
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      rets: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  // get the data from server side
  handleSearchChange({ currentTarget: { value: searchText } }) {
    this.setState({ searchText });
    const headers = new Headers();
    const init = {
      headers,
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };
    fetch(`http://localhost:8000/users/${searchText}`, init)
      .then(
        response => {
          console.log('response:', response);
          return response.json();
        }
      ).then(data => {
          console.log('data:', data);
          this.setState({ rets: data }); 
        }).catch(error => {
          console.log(JSON.stringify(error));
        });
  }

  // create pages for users search results and user's profile 
  // add router to switch pages
  render() {
    return (
       <Switch>
        <Route 
          exact
          path="/"
          render={() => (
            <UserPage 
              searchText={this.state.searchText}
              handleSearchChange={this.handleSearchChange}
              rets={this.state.rets}
            />
          )}
        />
        <Route 
          path="/profile"
          render={() => (
            <ProfilePage />
          )}
        />
       </Switch>
    );
  }
}

export default App;

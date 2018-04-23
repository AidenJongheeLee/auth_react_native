import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  // original file use componentWillMount
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB7Q2z0v3QXzA8xl9h3R88T29xPZKWP3TI',
      authDomain: 'auth-e1538.firebaseapp.com',
      databaseURL: 'https://auth-e1538.firebaseio.com',
      projectId: 'auth-e1538',
      storageBucket: 'auth-e1538.appspot.com',
      messagingSenderId: '365739923437'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const LoadingContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export default App;

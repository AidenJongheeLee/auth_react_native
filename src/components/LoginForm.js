import React, { Component } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.onLoginSuccess();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button
        onPress={() => {
          this.onButtonPress();
        }}
      >
        Log in
      </Button>
    );
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <ErrorText>{this.state.error}</ErrorText>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const ErrorText = styled.Text`
  color: red;
  font-size: 20px;
  align-self: center;
`;

export default LoginForm;

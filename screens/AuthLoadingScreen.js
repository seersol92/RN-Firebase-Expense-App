import React from 'react';
import {
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import Spinner from '../components/Spinner';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
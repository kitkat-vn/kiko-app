import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const routeConfig = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
    },
    path: 'login',
  },
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: {
      title: 'Home',
    },
  }
};

const navigatorConfig = {
  initialRouteName: 'Login',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  navigationOptions: {
    headerStyle: {
      headerBackTitle: null,
      backgroundColor: 'rgb(58,139,255)',
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return <RootStackNavigator navigation={this.props.navigation} />;
  }
}

export default RootNavigator;

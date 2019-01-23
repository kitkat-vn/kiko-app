import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import UnitsScreen from '../screens/Units';

const routeConfig = {
  Home: {
    screen: HomeScreen,
  },
  Units: {
    screen: UnitsScreen,
  }
};

const navigatorConfig = {
  initialRouteName: 'Home',
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

const HomeStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class HomeNavigator extends React.Component<IProps> {
  private static router = HomeStackNavigator.router;

  public render() {
    return <HomeStackNavigator navigation={this.props.navigation} />;
  }
}

export default HomeNavigator;

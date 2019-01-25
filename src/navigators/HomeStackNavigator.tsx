import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import UnitsScreen from '../screens/Units';
import { Image } from 'react-native';

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
  defaultNavigationOptions: {
    header: <Image source={require('../../assets/images/blueHeader.png')} style={{ position: 'absolute',top: 0, left: 0, height: 60, width: '100%', resizeMode: 'stretch'}}/>
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

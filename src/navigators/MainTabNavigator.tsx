
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from '../navigators/HomeStackNavigator';
import StatisticsStack from '../navigators/StatisticsStackNavigator';
import LeaderBoardStack from '../navigators/LeaderBoardStackNavigator';
import UpgradeStack from '../navigators/UpgradeStackNavigator';
import AccountStack from '../navigators/AccountStackNavigator';

const routeConfig = {
  Home: { screen: HomeStack },
  Statistics: { screen: StatisticsStack },
  LeaderBoard: { screen: LeaderBoardStack },
  Upgrade: { screen: UpgradeStack },
  Account: { screen: AccountStack },
};

const navigatorConfig = {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    style: {
      backgroundColor: '#FFFFFF',
      height: 64,
      paddingHorizontal: 15,
      paddingVertical: 11,
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 5,
    },
    labelStyle: {
      fontSize: 11,
      lineHeight: 13,
    },
    allowFontScaling: true,
    activeTintColor: 'rgba(85, 85, 85, 1)',
    inactiveTintColor: 'rgba(85, 85, 85, 0.7)'
  },
};

const TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class MainTabNavigator extends React.Component<IProps> {
  private static router = TabNavigator.router;

  public render() {
    return <TabNavigator navigation={this.props.navigation} />;
  }
}

export default MainTabNavigator;
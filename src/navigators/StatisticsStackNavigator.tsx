import React from 'react';
import { createStackNavigator } from 'react-navigation';

import StatisticsScreen from '../screens/Statistics';

const routeConfig = {
  Statistics: {
    screen: StatisticsScreen,
  }
};

const navigatorConfig = {
  initialRouteName: 'Statistics',
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

const StatisticsStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class StatisticsNavigator extends React.Component<IProps> {
  private static router = StatisticsStackNavigator.router;

  public render() {
    return <StatisticsStackNavigator navigation={this.props.navigation} />;
  }
}

export default StatisticsNavigator;

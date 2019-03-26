import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LeaderBoardScreen from '../screens/LeaderBoard';

const routeConfig = {
  LeaderBoard: {
    screen: LeaderBoardScreen,
  }
};

const navigatorConfig = {
  initialRouteName: 'LeaderBoard',
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

const LeaderBoardStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class LeaderBoardNavigator extends React.Component<IProps> {
  private static router = LeaderBoardStackNavigator.router;

  public render() {
    return <LeaderBoardStackNavigator navigation={this.props.navigation} />;
  }
}

export default LeaderBoardNavigator;

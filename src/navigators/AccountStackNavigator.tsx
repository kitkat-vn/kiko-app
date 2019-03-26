import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AccountScreen from '../screens/Account';

const routeConfig = {
  Account: {
    screen: AccountScreen,
  }
};

const navigatorConfig = {
  initialRouteName: 'Account',
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

const AccountStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class AccountNavigator extends React.Component<IProps> {
  private static router = AccountStackNavigator.router;

  public render() {
    return <AccountStackNavigator navigation={this.props.navigation} />;
  }
}

export default AccountNavigator;

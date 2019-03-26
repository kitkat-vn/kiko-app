import React from 'react';
import { createStackNavigator } from 'react-navigation';

import UpgradeScreen from '../screens/Upgrade';

const routeConfig = {
  Upgrade: {
    screen: UpgradeScreen,
  }
};

const navigatorConfig = {
  initialRouteName: 'Upgrade',
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

const UpgradeStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation: any;
}

class UpgradeNavigator extends React.Component<IProps> {
  private static router = UpgradeStackNavigator.router;

  public render() {
    return <UpgradeStackNavigator navigation={this.props.navigation} />;
  }
}

export default UpgradeNavigator;

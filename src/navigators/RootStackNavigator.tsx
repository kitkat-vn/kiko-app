import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import MainTabbar from '../navigators/MainTabNavigator';
import ExercisesScreen from '../screens/Exercises';
import PronunciationScreen from '../screens/Pronunciation';
import DictationScreen from '../screens/Dictation';
import ListenAnswerScreen from '../screens/ListenAnswer';
import ListenFillScreen from '../screens/ListenFill';
import ListenWordScreen from '../screens/ListenWord';

const routeConfig = {
  Login: {
    screen: LoginScreen,
  },
  Main: {
    screen: MainTabbar,
  },
  Exercises: {
    screen: ExercisesScreen,
  },
  Pronunciation: {
    screen: PronunciationScreen,
  },
  Dictation: {
    screen: DictationScreen,
  },
  ListenAnswer: {
    screen: ListenAnswerScreen,
  },
  ListenFill: {
    screen: ListenFillScreen,
  },
  ListenWord: {
    screen: ListenWordScreen,
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

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StackActions, NavigationActions } from 'react-navigation';
export interface IAccountProps {
  navigation: any;
}

export interface IAccountState {
}

export default class AccountScreen extends React.Component<IAccountProps, IAccountState> {
  constructor(props: IAccountProps) {
    super(props);
    this.state = {
    };
  }

  private logout = () => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>AccountScreen</Text>
        <TouchableOpacity onPress={this.logout}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

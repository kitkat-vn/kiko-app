import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export interface ILoginProps {
  navigation: any;
}

export interface ILoginState {
}

export default class LoginScreen extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
    };
  }

  goHome =() => {
    this.props.navigation.push("Home");
  }

  public render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity  onPress={this.goHome}>
          <Text>Go to Home</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export interface IHomeProps {
  navigation: any;
}

export interface IHomeState {
}

export default class HomeScreen extends React.Component<IHomeProps, IHomeState> {
  
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
    };
  }

  go = () => {
    this.props.navigation.navigate('Units');
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.go}>
          <Text>Pick up brain booster</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

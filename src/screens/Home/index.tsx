import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { inject, observer } from 'mobx-react';
import { TestStore } from '../../stores';

export interface IHomeProps {
  navigation: any;
  testStore: TestStore
}

export interface IHomeState {
}

@inject('testStore')
@observer
export default class HomeScreen extends React.Component<IHomeProps, IHomeState> {
  
  counterIncreaseInterval;
  
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.counterIncreaseInterval = setInterval(() => {
      this.props.testStore.increase()
    }, 1000);
  }

  componentWillUnmount() {
    this.props.testStore.reset();
    if (this.counterIncreaseInterval) {
      clearInterval(this.counterIncreaseInterval);
      this.counterIncreaseInterval = null;
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Counter: {this.props.testStore.counter}</Text>
        <TouchableOpacity onPress={this.goBack}>
          <Text>Back to login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

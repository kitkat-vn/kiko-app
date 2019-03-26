import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IListenAnswerProps {
  navigation: any;
}

export interface IListenAnswerState {
}

export default class ListenAnswerScreen extends React.Component<IListenAnswerProps, IListenAnswerState> {
  constructor(props: IListenAnswerProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>ListenAnswerScreen</Text>
      </View>
    );
  }
}

import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IListenFillProps {
  navigation: any;
}

export interface IListenFillState {
}

export default class ListenFillScreen extends React.Component<IListenFillProps, IListenFillState> {
  constructor(props: IListenFillProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>ListenFillScreen</Text>
      </View>
    );
  }
}

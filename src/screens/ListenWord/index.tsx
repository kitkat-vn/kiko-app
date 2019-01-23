import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IListenWordProps {
  navigation: any;
}

export interface IListenWordState {
}

export default class ListenWordScreen extends React.Component<IListenWordProps, IListenWordState> {
  constructor(props: IListenWordProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>ListenWordScreen</Text>
      </View>
    );
  }
}

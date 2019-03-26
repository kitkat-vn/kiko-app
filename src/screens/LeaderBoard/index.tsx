import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface ILeaderBoardProps {
  navigation: any;
}

export interface ILeaderBoardState {
}

export default class LeaderBoardScreen extends React.Component<ILeaderBoardProps, ILeaderBoardState> {
  constructor(props: ILeaderBoardProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>LeaderBoardScreen</Text>
      </View>
    );
  }
}

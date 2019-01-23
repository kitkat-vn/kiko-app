import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IStatisticsProps {
  navigation: any;
}

export interface IStatisticsState {
}

export default class StatisticsScreen extends React.Component<IStatisticsProps, IStatisticsState> {
  constructor(props: IStatisticsProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>StatisticsScreen</Text>
      </View>
    );
  }
}

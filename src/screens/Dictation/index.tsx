import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IDictationProps {
  navigation: any;
}

export interface IDictationState {
}

export default class DictationScreen extends React.Component<IDictationProps, IDictationState> {
  constructor(props: IDictationProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>DictationScreen</Text>
      </View>
    );
  }
}

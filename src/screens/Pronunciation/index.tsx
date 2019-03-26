import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IPronunciationProps {
  navigation: any;
}

export interface IPronunciationState {
}

export default class PronunciationScreen extends React.Component<IPronunciationProps, IPronunciationState> {
  constructor(props: IPronunciationProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>PronunciationScreen</Text>
      </View>
    );
  }
}

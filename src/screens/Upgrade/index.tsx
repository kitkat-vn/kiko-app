import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IUpgradeProps {
  navigation: any;
}

export interface IUpgradeState {
}

export default class UpgradeScreen extends React.Component<IUpgradeProps, IUpgradeState> {
  constructor(props: IUpgradeProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>UpgradeScreen</Text>
      </View>
    );
  }
}

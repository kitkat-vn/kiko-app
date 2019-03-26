import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
export interface IRegisterProps {
  navigation: any;
}

export interface IRegisterState {
}

export default class RegisterScreen extends React.Component<IRegisterProps, IRegisterState> {
  constructor(props: IRegisterProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>RegisterScreen</Text>
      </View>
    );
  }
}

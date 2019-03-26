import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export interface IUnitsProps {
  navigation: any;
}

export interface IUnitsState {
}

export default class UnitsScreen extends React.Component<IUnitsProps, IUnitsState> {
  constructor(props: IUnitsProps) {
    super(props);
    this.state = {
    };
  }

  go = () => {
    this.props.navigation.navigate('Exercises');
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.go}>
          <Text>Greetings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

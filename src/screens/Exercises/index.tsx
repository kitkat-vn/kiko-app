import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export interface IExcercisesProps {
  navigation: any;
}

export interface IExcercisesState {
}

export default class ExcercisesScreen extends React.Component<IExcercisesProps, IExcercisesState> {
  constructor(props: IExcercisesProps) {
    super(props);
    this.state = {
    };
  }

  goPronunciation = () => {
    this.go("Pronunciation");
  }

  goDictation = () => {
    this.go("Dictation");
  }

  goListenFill = () => {
    this.go("ListenFill");
  }

  goListenAnswer = () => {
    this.go("ListenAnswer");
  }

  goListenWord = () => {
    this.go("ListenWord");
  }
  
  go = (route) => {
    this.props.navigation.navigate(route);
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goPronunciation}>
          <Text>Pronunciation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goDictation}>
          <Text>Dictation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goListenFill}>
          <Text>ListenFill</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goListenAnswer}>
          <Text>ListenAnswer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goListenWord}>
          <Text>ListenWord</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

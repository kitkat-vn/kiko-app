import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component<any, any>{
  @observable count = 0;

  componentDidMount() {
    setInterval(() => {
      this.count = this.count + 1;
    }, 1000)
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Nativeeee!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text>{this.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

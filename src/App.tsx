import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import { createStores } from './stores';
import SwitchNavigator from './navigators//SwitchNavigator';

const rootStore = createStores();

export default class App extends React.Component<any, any>{

  public render() {
    return (
      <Provider {...rootStore}>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

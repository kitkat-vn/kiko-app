import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import I18n from '../../language';
import { IC_ADMIN } from '../../utils/icons';
import { DefaultBackground } from '../../components';
export interface ILoginProps {
  navigation: any;
}

export interface ILoginState {
}

export default class LoginScreen extends React.Component<ILoginProps, ILoginState> {
  
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
    };
  }

  goHome =() => {
    this.props.navigation.push("Main");
  }

  public render() {
    return (
        <View style={styles.container}>
          <DefaultBackground />
          <Image source={IC_ADMIN} />
          <TouchableOpacity onPress={this.goHome}>
            <Text>{I18n.t('goHome')}</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

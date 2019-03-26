import * as React from 'react';
import { IMAGE_BG } from '../../utils/images';
import { StyleSheet, View, Image } from 'react-native';

interface IBackgroundProps {
  top: number;
  bottom: number;
}

export class DefaultBackground extends React.PureComponent<IBackgroundProps, any> {
  static defaultProps = {
    top: 0,
    bottom: 0,
  } 

  public render() {
    const { top, bottom } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.bgWrapper, { top, bottom }]}>
          <Image source={IMAGE_BG} style={styles.cover}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  bgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cover: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  }
})

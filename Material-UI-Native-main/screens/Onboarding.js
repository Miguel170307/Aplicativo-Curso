import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}> 
        <StatusBar barStyle="" />
        <Block flex center>
          <Image
            source={{ uri: Images.Onboarding }}
            style={{ height: height / 1.1, width: 460, zIndex:0 }}
          />
        </Block>
        <Block flex={1.3} space="between" style={styles.padded}>
          <Block style={{ paddingTop: 50, position: 'relative' }}>
            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,1,0,0)', 'rgba(0,0,0,1)']} />
            <Block style={{ marginBottom: theme.SIZES.BASE / 2, paddingHorizontal: theme.SIZES.BASE * 2, zIndex: 3 }}>
              <Block>
                <Text color="blue" size={60}></Text>
              </Block>
              <Block row>
                <Text color="blue" size={60}></Text>
                <Block middle style={styles.pro}>
                  <Text size={16} color="white"></Text>
                </Block>
              </Block>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2,  zIndex: 3 }}>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                
              </Text>
            </Block>
          </Block>
          <Block center style={{ paddingBottom: 20 }}>
            <Button
              shadowless
              style={styles.button}
              color={'#1778F2'}
              onPress={() => navigation.navigate('App')}>
              PROSSEGUIR
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
 
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
 
  
});

import React from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

const { width } = Dimensions.get('window');

export default class SignIn extends React.Component {
  state = {
    email: '-',
    password: '-',
    active: {
      email: false,
      password: false,
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#EEEEEE', '#F4f4f4']}
        style={[styles.signin, {flex: 1, paddingTop: theme.SIZES.BASE * 20}]}>
        <Block flex center paddingTop="150">
          <KeyboardAvoidingView behavior="padding" disabled>
            <Block >
              <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 0.75 }}>
                <Block flex middle right>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="facebook"
                    iconFamily="font-awesome"
                    color={theme.COLORS.FACEBOOK}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
                <Block flex middle center>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="twitter"
                    iconFamily="font-awesome"
                    color={theme.COLORS.TWITTER}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
                <Block flex middle left>
                  <Button
                    round
                    onlyIcon
                    iconSize={theme.SIZES.BASE * 1.625}
                    icon="dribbble"
                    iconFamily="font-awesome"
                    color={theme.COLORS.DRIBBBLE}
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    style={styles.social}
                    onPress={() => Alert.alert('Not implemented')}
                  />
                </Block>
              </Block>
            </Block>
            <Block middle style={{ paddingVertical: theme.SIZES.BASE * 2}}>
              <Text center color="#1778F2" size={18}>
                ou
              </Text>
            </Block>
            <Block flex>
              <Block center>
                <Input
                  borderless
                  color="#4D4D4D"
                  placeholder="Email"
                  type="email-address"
                  autoCapitalize="none"
                  bgColor='transparent'
                  onBlur={() => this.toggleActive('email')}
                  onFocus={() => this.toggleActive('email')}
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  onChangeText={text => this.handleChange('email', text)}
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                />
                <Input
                  password
                  viewPass
                  borderless
                  color="#4D4D4D"
                  iconColor="#A8A8A8"
                  placeholder="Senha"
                  bgColor='transparent'
                  onBlur={() => this.toggleActive('password')}
                  onFocus={() => this.toggleActive('password')}
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  onChangeText={text => this.handleChange('password', text)}
                  style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                />
                <Text
                  color={'#1778F2'}
                  size={theme.SIZES.FONT * 0.75}
                  onPress={() => Alert.alert('Not implemented')}
                  style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
                >
                  Esqueceu sua senha?
                  </Text>
              </Block>
              <Block center flex style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  style={{ height: 48 }}
                  onPress={() => Alert.alert('Sign in action',`Email: ${email} Password: ${password}`,)}
                >
                  LOGIN
                </Button>
                <Button size="large" color="transparent" shadowless onPress={() => navigation.navigate('Sign Up')}>
                  <Text
                    center
                    color={'#1778F2'}
                    size={theme.SIZES.FONT * 0.75}
                    style={{marginTop:20}}
                  >
                    {"Não tem uma conta? Cadastre-se"}
                  </Text>
                </Button>
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  signin: {        
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  input: {
    width: width * 0.9, 
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: "white",
  },
});

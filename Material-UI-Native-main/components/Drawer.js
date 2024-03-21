import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "início":
        return (
          <Icon
            size={14}
            name="shop"
            family="GalioExtra"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "mulher":
        return (
          <Icon
            size={16}
            name="woman"
            family="ionicon"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "homem":
        return (
          <Icon
            size={15}
            name="man"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "criança":
        return (
          <Icon
            size={15}
            name="baby"
            family="GalioExtra"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "nova coleção":
        return (
          <Icon
            size={15}
            name="grid-on"
            family="material"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Perfil":
        return (
          <Icon
            size={15}
            name="circle-10"
            family="GalioExtra"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "configurações":
        return (
          <Icon
            size={15}
            name="gears"
            family="font-awesome"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Componentes":
        return (
          <Icon
            size={17}
            name="triangle"
            family="ionicon"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Sign In":
        return (
          <Icon
            size={15}
            name="ios-log-in"
            family="ionicon"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Sign Up":
        return (
          <Icon
            size={15}
            name="person-add"
            family="ionicon"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      default:
        return null;
    }
  };
  render() {
    const { title, focused, navigation, navigateTo } = this.props;
    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null,
          ]}
        >
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {this.renderIcon()}
          </Block>
          <Block flex={0.9}>
            <Text size={15} color={focused ? "white" : "black"}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
});

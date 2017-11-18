import React, { Component } from 'react';
import { StyleSheet, View, ToolbarAndroid } from 'react-native';

import nativeImageSource from 'nativeImageSource'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AppBar extends Component {
  render() {
    return(
      <Icon.ToolbarAndroid
  
            navIconName="menu"
            onActionSelected={this._onActionSelected}
            onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
            style={styles.toolbar}
            subtitle={'Hello World!'}
            title="Toolbar"/>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#fff',
    elevation: 4,
    height: 56,
    paddingRight: 60
  }
});

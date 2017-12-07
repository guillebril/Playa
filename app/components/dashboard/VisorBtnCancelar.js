import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

//COMPONENTE
class VisorBtnCancelar extends Component {

  borrarChapa() {
    this.props.borrarChapaVisor()
    setTimeout(() => {
      // This function is able to dispatch other action creators
      this.props.borrarChapa();
      this.props.contadorEn1()
    }, 20);
  }

  render() {
    return (<View style={styles.cancelar}>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            onPress={() => {
              this.borrarChapa()
            }}>

            <View style={styles.cancelarCont}>
              <Icon name="cancelar" size={30} color="#fff" style={styles.cancelarIcon}/>
            </View>
          </TouchableNativeFeedback>

        </View>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(null, mapDispatchToProps)(VisorBtnCancelar);

const styles = StyleSheet.create({
  cancelar: {
    flex: 1,
    opacity: 0.5,
    paddingLeft: 25,
    marginRight: 15,
    justifyContent: 'center'
  },

  cancelarIcon: {
    paddingTop: 35,
    left: 30
  },

  cancelarCont: {
    height: 90
  }

});
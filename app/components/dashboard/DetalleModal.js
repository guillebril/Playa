import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class DetalleModal extends Component {

  cambiarVisibilidad() {
    this.props.toggleModal()
  }

  render() {

    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.estadoModal}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <View style={styles.contenedor}>
            <View style={styles.fila1}>
              <View>
                <Text style={styles.label}>Patente</Text>
                <Text style={styles.chapaTexto}>{this.props.vehiculo.chapa}</Text>
              </View>
              <View>
                <Text style={styles.label}>Vehiculo</Text>
                <Icon name={this.props.vehiculo.vehiculo} size={65} color='#898989' style={styles.vehiculoIcono}/>

              </View>
              <View>
                <Text style={styles.label}>Tarifa</Text>
                <Icon name={'24hs'} size={65} color='#007AC2' style={styles.vehiculoIcono}/>

              </View>
            </View>

            <TouchableHighlight onPress={() => {
              this.cambiarVisibilidad()
            }}>
              <Text style={{marginTop: 22, fontSize: 50}}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
          </Modal>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 150,
    paddingVertical: 80,
    backgroundColor: '#fff',
    width: '70%',
    height: '100%',
    flexDirection: 'column'
  },
  fila1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 20,
    fontWeight: '100'
  },
  chapaTexto: {
    fontSize: 42,
    fontWeight: '500'
  }

})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return { estadoModal: state.toggleModal, vehiculo: state.vehiculoEnModal }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetalleModal)
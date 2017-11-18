import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TarjetaTiempoPerman from './TarjetaTiempoPerman'
import TarjetaHoraIngreso from './TarjetaHoraIngreso'
//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'


class Tarjeta24 extends Component {
  cambiarVisibilidad() {
    this.props.toggleModal()
  }

  render() {
      return (
        <View
          borderTopWidth={6}
          borderTopColor={'#007AC2'}
          backgroundColor={'#fff'}
          style={{
            elevation: 2,
            marginHorizontal: 5,
            marginVertical: 8,

          }}>

          <TouchableHighlight onPress={() => {
            this.cambiarVisibilidad()
          }}>

            <View style={styles.tar}>
              <View>
                <Text style={styles.chapa}>
                  {this.props.chapa}
                </Text>
                <Icon name={this.props.vehiculo} size={40} color='#898989' style={styles.vehiculoIcono}/>
              </View>
              <View>
                <View style={styles.textSupDer}>
                  <Text style={styles.textQuedan}>llego</Text>
                  <TarjetaHoraIngreso horaIngreso={this.props.horaIngreso}/>
                </View>
                <View style={styles.tiempo}>
                  <Text style={styles.textQuedan}>quedan </Text>
                  <TarjetaTiempoPerman horaIngreso={this.props.horaIngreso}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>

        </View>)
  }
}
const styles = StyleSheet.create({

  tar: {
    elevation: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    height: 95,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  vehiculoIcono: {
    paddingLeft: 5,
    marginBottom: 4,
    lineHeight: 32
  },
  chapa: {
    color: '#868686',
    fontSize: 33
  },
  textSupDer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',

    paddingBottom: 3,
  },
  textbig: {
    color: '#000',
    fontSize: 25
  },
  textQuedan: {
    fontSize: 18,
  },
  tiempo: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(null, mapDispatchToProps)(Tarjeta24);

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

//REDUX
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'
import TarifaVehiculo from './TarifaVehiculo'
import TarifaTiempo from './TarifaTiempo'

class Tarifas extends Component {

  toggleIconoTiempo(tiempo) {
    var tarifa = this.getTarifaVisor(
      this.props.vehiculoSeleccionado,
      tiempo,
      this.props.estadiaAuto,
      this.props.doctorAuto,
      this.props.estadiaMoto,
      this.props.doctorMoto,
      this.props.estadiaChata,
      this.props.doctorChata)

    this.props.toggleIconoTiempo(tiempo, tarifa)


        setTimeout( () => {
            this.props.contadorEn1();

        }, 100 );


  }

  toggleIconoVehiculo(vehiculo) {
    var tarifa = this.getTarifaVisor(
      vehiculo,
      this.props.tiempoSeleccionado,
      this.props.estadiaAuto,
      this.props.doctorAuto,
      this.props.estadiaMoto,
      this.props.doctorMoto,
      this.props.estadiaChata,
      this.props.doctorChata)
    this.props.toggleIconoVehiculo(vehiculo, tarifa)

  }

  getTarifaVisor(tarifaVehiculo, tarifaTiempo, estadiaAuto, doctorAuto, estadiaMoto,
    doctorMoto, estadiaChata, doctorChata) {

    switch(tarifaVehiculo) {
    case 'auto':
      if(tarifaTiempo == 'Estadia') {
        precioVisor = estadiaAuto
      } else {
        precioVisor = doctorAuto
      }
      break;

    case 'moto':
      if(tarifaTiempo == 'Estadia') {
        precioVisor = estadiaMoto
      } else {
        precioVisor = doctorMoto
      }
      break;

    case 'chata':
      if(tarifaTiempo == 'Estadia') {
        precioVisor = estadiaChata
      } else {
        precioVisor = doctorChata
      }
      break;

    default:
      precioVisor = ""
    }
    return precioVisor
  }

  render() {
    return(
      <View style={styles.contenedorNumeros}>
        <View style={styles.filaNumeros}>

          {/*====POR TIEMPO====*/}

          <TarifaTiempo
            tipoTiempo={'xHora'}
            nombreIcono={'timer'}
            colorIcono={'#C23627'}
            tiempoSeleccionado={this.props.tiempoSeleccionado}
            onPress={() => {
            this.toggleIconoTiempo('xHora')
          }}/>
          <TarifaTiempo
            tipoTiempo={'Doctor'}
            nombreIcono={'doc'}
            colorIcono={'#07816b'}
            tiempoSeleccionado={this.props.tiempoSeleccionado}
            onPress={() => {
            this.toggleIconoTiempo('Doctor')
          }}/>

          <TarifaTiempo
            tipoTiempo={'Estadia'}
            nombreIcono={'24hs'}
            colorIcono={'#1E88E5'}
            tiempoSeleccionado={this.props.tiempoSeleccionado}
            onPress={() => {
            this.toggleIconoTiempo('Estadia')
          }}/>

        </View>

        {/*====POR TIPO DE VEHICULO====*/}
        <View style={styles.filaNumeros}>
          <TarifaVehiculo
            vehiculoSeleccionado={this.props.vehiculoSeleccionado}
            tipoVehiculo={'moto'}
            onPress={() => {
            this.toggleIconoVehiculo('moto')
          }}/>

          <TarifaVehiculo
            vehiculoSeleccionado={this.props.vehiculoSeleccionado}
            tipoVehiculo={'auto'}
            onPress={() => {
            this.toggleIconoVehiculo('auto')
          }}/>

          <TarifaVehiculo
            vehiculoSeleccionado={this.props.vehiculoSeleccionado}
            tipoVehiculo={'chata'}
            onPress={() => {
            this.toggleIconoVehiculo('chata')
          }}/>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    tiempoSeleccionado: state.tarifaTiempo,
    vehiculoSeleccionado: state.tarifaVehiculo,
    estadiaAuto: state.tarifas.estadiaAuto,
    estadiaMoto: state.tarifas.estadiaMoto,
    estadiaChata: state.tarifas.estadiaChata,
    doctorAuto: state.tarifas.doctorAuto,
    doctorMoto: state.tarifas.doctorMoto,
    doctorChata: state.tarifas.doctorChata
  }
}, mapDispatchToProps)(Tarifas);

const styles = StyleSheet.create({
  contenedorNumeros: {
    flex: 1
  },
  filaNumeros: {
    flex: 1,
    flexDirection: 'row'
  }
});

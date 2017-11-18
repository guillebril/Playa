import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, FlatList, ScrollView, View } from 'react-native';
import Tarjeta24 from './Tarjeta24';
import TarjetaHs from './TarjetaHs';
import TarjetaDoc from './TarjetaDoc';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

import DetalleModal from './DetalleModal'

import AppBar from '../generales/AppBar'



class TarjetasContenedor extends Component {


    render() {
        let filtradosChapa = this.props.vehiculos
        return ( <ScrollView>
          <AppBar/>
          <View style={styles.contenedor}>
            <View style={styles.columna}>
              {filtradosChapa.filter( vehiculo => vehiculo.tarifa === 'xHora' ).map( ( vehiculo ) => <TarjetaHs key={vehiculo.horaIngreso}  {...vehiculo}/> )}
            </View>


            
            <DetalleModal/>
          </View>
        </ScrollView> )
    }
}

function mapStateToProps( state ) {
    return { vehiculos: state.vehiculos};
}
export default connect( mapStateToProps )( TarjetasContenedor );

const styles = StyleSheet.create( {
    contenedor: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 15,
        marginLeft: 15
    },
    columna: {

        flex: 1,
        paddingRight: 18,
        alignItems: 'stretch'
    }
} );

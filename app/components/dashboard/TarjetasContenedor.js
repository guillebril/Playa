import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, FlatList,ScrollView, View } from 'react-native';
import Tarjeta24 from './Tarjeta24';
import TarjetaHs from './TarjetaHs';
import TarjetaDoc from './TarjetaDoc';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

import DetalleModal from './DetalleModal'

import AppBar from '../generales/AppBar'



class TarjetasContenedor extends Component {


    componentDidUpdate(){
      console.log('actualiza')
    }
    render() {
        let filtradosChapa = this.props.vehiculos.filter(vehiculo => vehiculo.chapa.includes(this.props.chapaVisor))
        return ( <ScrollView>
          <AppBar/>
          <View

            style={styles.contenedor}>
            <FlatList style={styles.columna}
              initialNumToRender={6}
              maxToRenderPerBatch={6}
              keyExtractor = {(item, index) => item.horaIngreso}
              data={filtradosChapa.filter( vehiculo => vehiculo.tarifa === 'xHora'  )}
              renderItem={({item}) => <TarjetaHs
                {...item}/>}
            />
            <FlatList
              style={styles.columna}
              initialNumToRender={6}
              maxToRenderPerBatch={6}
              keyExtractor = {(item, index) => item.horaIngreso}
              data={filtradosChapa.filter( vehiculo => vehiculo.tarifa === 'Doctor'   )}
              renderItem={({item}) => <TarjetaDoc
                {...item}/>}
            />
            <FlatList style={styles.columna}
              initialNumToRender={6}
              maxToRenderPerBatch={6}
              keyExtractor = {(item, index) => item.horaIngreso}
              data={filtradosChapa.filter( vehiculo => vehiculo.tarifa === 'Estadia' ) }
              renderItem={({item}) =>
                <Tarjeta24
                  {...item}/>}
            />

            <DetalleModal/>
          </View>
        </ScrollView> )
    }
}

function mapStateToProps( state ) {
    return { vehiculos: state.vehiculos, chapaVisor: state.chapa};
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

    }
} );

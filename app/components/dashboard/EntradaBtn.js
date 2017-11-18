import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

class EntradaBtn extends Component {

    entrada( chapa, tarifaTiempo, tarifaVehiculo ) {
        horaIngreso = new Date( ).toISOString( )
        if ( tarifaTiempo === 'Doctor' ) {
            horaVencimiento = 'calcular'
            montoPagado = 333
            cantidad = 4

            this.props.entrarVehiculoDoc( chapa, tarifaTiempo, tarifaVehiculo, horaIngreso )
        } else {
            this.props.entrarVehiculo( chapa, tarifaTiempo, tarifaVehiculo, horaIngreso )
        }
    }

    render( ) {
        return (
            <TouchableNativeFeedback
                onPress={( ) => this.entrada( this.props.chapa, this.props.tarifaTiempo, this.props.tarifaVehiculo )}
                background={TouchableNativeFeedback.SelectableBackgroundBorderless( )}>
                <View style={styles.elementonum}>
                    <Text numberOfLines={1} style={styles.texto}>ENTRA</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch )
}
function mapStateToProps( state ) {
    return { chapa: state.chapa, tarifaTiempo: state.tarifaTiempo, tarifaVehiculo: state.tarifaVehiculo };
}
export default connect( mapStateToProps, mapDispatchToProps )( EntradaBtn );

const styles = StyleSheet.create({
    elementonum: {
        flex: 1,
        margin: 20,
        backgroundColor: '#444444',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#fff',
        fontSize: 19
    }
});

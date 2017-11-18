import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

//Presentation Componentes
import VisorVencimiento from './VisorVencimiento'
import VisorBtnCancelar from './VisorBtnCancelar';
import VisorPatente from './VisorPatente'
import VisorTarifa from './VisorTarifa'
import VisorBtnBorrar from './VisorBtnBorrar';
import VisorBtnContador from './VisorBtnContador';
class Visor extends Component {

    masContadorDias() {
        this.props.masContadorDias();
    }

    menosContadorDias() {
        this.props.menosContadorDias();
    }

    colorFondo( tarifaTiempo ) {
        switch ( tarifaTiempo ) {
            case 'xHora':
                return '#C23627'
                break;
            case 'Doctor':
                return '#07816b'
                break;
            case 'Estadia':
                return '#1E88E5'
                break;
            default:
                return '#888'
        }

    }

    render() {
        let ponerCantDias = null
        let botonMas = null
        let botonMenos = null
        if ( this.props.tarifaTiempo === 'xHora' ) {} else {
            ponerCantDias = <VisorTarifa cantDias={this.props.cantDias}/>
            botonMas = <VisorBtnContador
                icono={'+'}
                onPress={() => {
                    this.masContadorDias()
                }}/>

            botonMenos = <VisorBtnContador
                icono={'-'}
                onPress={() => {
                    this.menosContadorDias()
                }}/>
        }

        return ( <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: this.colorFondo( this.props.tarifaTiempo )
            }}>

            <View style={styles.textos}>
                <View style={styles.contChapa}>
                    <VisorPatente chapa={this.props.chapa}/>
                </View>
                <View style={styles.contTexto}>
                    {ponerCantDias}
                </View>
            </View>

            <View style={styles.BtnsContador}>
                {botonMas}{botonMenos}
            </View>

        </View> );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
    return { chapa: state.chapaVisor, tarifaTiempo: state.tarifaTiempo, tarifaVehiculo: state.tarifaVehiculo, precioVisor: state.precioVisor, cantDias: state.cantDias }
}
export default connect( mapStateToProps, mapDispatchToProps )( Visor )

const styles = StyleSheet.create( {
    textos: {
        flex: 4,
        paddingLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    contChapa: {
        flex: 1
    },
    contTexto: {
        flex: 1
    },
    BtnsContador: {
        alignItems: 'center',
        flex: 1
    }
} );

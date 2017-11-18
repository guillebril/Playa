import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import Numero from './Numero'
import VisorBtnCancelar from './VisorBtnCancelar'
import EntradaBtn from './EntradaBtn'

export default class Numeros extends Component {
    render( ) {
        return (
            <View style={styles.contenedorNumeros}>
                <View style={styles.filaNumeros}>
                    <Numero numero={'7'}/>
                    <Numero numero={'8'}/>
                    <Numero numero={'9'}/>
                </View>
                <View style={styles.filaNumeros}>
                    <Numero numero={'4'}/>
                    <Numero numero={'5'}/>
                    <Numero numero={'6'}/>
                </View>
                <View style={styles.filaNumeros}>
                    <Numero numero={'1'}/>
                    <Numero numero={'2'}/>
                    <Numero numero={'3'}/>
                </View>
                <View style={styles.filaNumeros}>
                    <EntradaBtn {...this.props}/>
                    <Numero numero={'0'}/>
                    <VisorBtnCancelar/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contenedorNumeros: {
        flex: 1
    },
    filaNumeros: {
        flex: 1,
        flexDirection: 'row'
    },
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

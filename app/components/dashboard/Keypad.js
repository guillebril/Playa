import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Numeros from './Numeros';
import Tarifas from './Tarifas';
import Visor from './Visor';
export default class keypad extends Component {
    render() {
        return (
            <View style={styles.keypadContainer}>
                <View style={styles.keytarjeta}>
                    <Visor/>
                </View>
                <View style={styles.tarifa}>
                    <Tarifas/>
                </View>
                <View style={styles.numeros}>
                    <Numeros/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    keypadContainer: {
        flex: 1
    },
    keytarjeta: {
        flex: 23
    },
    tarifa: {
        flex: 27
    },
    numeros: {
        flex: 50,
        backgroundColor: '#444444'
    }
});

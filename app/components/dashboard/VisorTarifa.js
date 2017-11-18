import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native';

export default class VisorTarifa extends Component {

    render( ) {
        return (
            <View style={styles.precio}>
                <Text style={styles.precioTexto}>
                    $498 x {this.props.cantDias} día
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    precio: {
        flex: 4,
        justifyContent: 'center'
    },
    precioTexto: {
        paddingLeft: 60,
        color: '#fff',
        fontSize: 28,
        opacity: 0.8,
        lineHeight: 28
    }
});

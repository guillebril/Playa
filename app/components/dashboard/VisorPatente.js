import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, Text, View, TextInput } from 'react-native';

export default class VisorPatente extends Component {

    render( ) {
        return (
            <View style={styles.patente}>
                <Text style={styles.patenteTexto}>
                    {this.props.chapa}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    patente: {
        paddingTop: 15,
        paddingLeft: 60
    },
    patenteTexto: {
        color: '#ffffff',
        fontSize: 95,
        lineHeight: 90,

        fontFamily: 'monospace'
    }
});

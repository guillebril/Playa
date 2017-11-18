import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native';

const VisorBtnContador = ({ onPress, icono }) => (

  <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackgroundBorderless( )}
      onPress={onPress}>
    <View style={styles.contenedor}>
            <Text style={styles.icono}>{icono}</Text>
    </View>
      </TouchableNativeFeedback>
)

export default VisorBtnContador

const styles = StyleSheet.create({

    contenedor: {
        flex: 2,
        opacity: 0.7,
        marginRight: 20,
        paddingRight: 20,
        justifyContent: 'center'
    },
    icono: {
        color: '#fff',
        fontSize: 50
    }
});

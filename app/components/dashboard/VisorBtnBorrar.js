import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native';

//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon( icoMoonConfig );

const VisorBtnBorrar = ({ onPress }) => (
    <View style={styles.borrar}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackgroundBorderless( )}
            onPress={onPress}>
            <View>
                <Icon name="back" size={30} color="#fff" style={styles.borrarIcon}/>
            </View>
        </TouchableNativeFeedback>
    </View>
)

export default VisorBtnBorrar

const styles = StyleSheet.create({

    borrar: {
        flex: 2,
        opacity: 0.5,
        paddingRight: 40,
        justifyContent: 'center'
    }
});

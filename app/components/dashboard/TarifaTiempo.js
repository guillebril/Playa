import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';

//ICONOS
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const TarifaTiempo = ({tipoTiempo, nombreIcono, colorIcono, tiempoSeleccionado, onPress}) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
            <View style={styles.elementonum}>
                <Icon
                    name={nombreIcono}
                    size={50}
                    color={tiempoSeleccionado == tipoTiempo
                    ? colorIcono
                    : '#ddd'}/>
            </View>
        </TouchableNativeFeedback>
    )
};

const styles = StyleSheet.create({
    elementonum: {
        flex: 1,
        margin: 18,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TarifaTiempo

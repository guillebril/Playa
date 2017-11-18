import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon( icoMoonConfig );
export default class VisorVencimiento extends Component {
	render() {
		return(
			<View style={styles.vencimiento}>
                <Text style={styles.estadia}>1 día
                    <Icon name="flecha" size={20} color="#fff"/>
                    mañana 14:32
                </Text>
            </View>
		);
	}
}
const styles = StyleSheet.create( {
	estadia: {
		color: '#fff',
		fontSize: 25,
		paddingLeft: 25
	},
	vencimiento: {
		flex: 75,
		paddingTop: 15,
		opacity: 0.8,
		justifyContent: 'center'
	}
} );

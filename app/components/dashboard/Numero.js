import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

class Numero extends Component {

    agregarNumeroAlaChapa( valor ) {
      this.props.agregarValorVisor( valor )
    setTimeout( () => {
          // This function is able to dispatch other action creators
          this.props.agregarValor( valor )
      }, 100 );

      }

    render() {
        return ( <TouchableNativeFeedback
            onPress={() => {
                this.agregarNumeroAlaChapa( this.props.numero )
            }}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
            <View style={styles.elementonum}>
                <Text numberOfLines={1} style={styles.textonum}>
                    {this.props.numero}
                </Text>
            </View>
        </TouchableNativeFeedback> );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch )
}

export default connect( null, mapDispatchToProps )( Numero );

const styles = StyleSheet.create( {

    elementonum: {
        flex: 1,
        margin: 0,
        backgroundColor: '#444444',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textonum: {
        color: '#fff',
        fontSize: 50,
        fontFamily: 'sans-serif-light'
    }
} );

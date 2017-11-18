import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'


class TarjetaGenerica extends Component {
  cambiarVisibilidad() {
    this.props.toggleModal()
  }

  render() {
  //  if (this.props.chapaVisor.length === 0 || this.props.chapa.includes(this.props.chapaVisor)) {
      return (
        <View
          borderTopWidth={6}
          borderTopColor={this.props.color}
          backgroundColor={'#fff'}
          style={{
            elevation: 2,
            marginHorizontal: 5,
            marginVertical: 8,

          }}>

          <TouchableHighlight onPress={() => {
            this.cambiarVisibilidad()
          }}>

            <View style={styles.tar}>
              <View>
                <Text style={styles.chapa}>
                  {this.props.chapa}
                </Text>
                <Icon name={this.props.iconoVehiculo} size={40} color='#898989' style={styles.vehiculoIcono}/>
              </View>
              <View>
                <Text style={styles.textSupDer}>
                  {this.props.texto1}
                  {this.props.ingreso}
                </Text>

                <View style={styles.tiempo}>
                  <Text style={styles.textQuedan}>
                    {this.props.texto2}
                  </Text>
                  <Text style={styles.textbig}>
                    {this.props.tiempo1}h {this.props.tiempo2}m
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>

        </View>)
    // } else {
    //   return (
    //     null)
    // }
  }
}
const styles = StyleSheet.create({

  tar: {
    elevation: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    maxWidth: 277,
    height: 95,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  vehiculoIcono: {
    paddingLeft: 5,
    marginBottom: 4,
    lineHeight: 32
  },
  chapa: {
    color: '#868686',
    fontSize: 33
  },
  textSupDer: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: '#868686',
    paddingBottom: 3,
    fontSize: 17
  },
  textbig: {
    color: '#000',
    fontSize: 25
  },
  textQuedan: {
    fontSize: 17,
    paddingBottom: 2,
    paddingRight: 4
  },
  tiempo: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return { chapaVisor: state.chapa };
}
export default connect(mapStateToProps, mapDispatchToProps)(TarjetaGenerica);

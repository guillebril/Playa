import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/indexActions.js'

class DetalleModal extends Component {

  cambiarVisibilidad(){
  this.props.toggleModal()
  }

  render() {

    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.estadoModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.cambiarVisibilidad()
            }}>
              <Text style={{marginTop: 22, fontSize: 50}}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}



function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
    return {  estadoModal: state.toggleModal }
}
export default connect( mapStateToProps, mapDispatchToProps )( DetalleModal )

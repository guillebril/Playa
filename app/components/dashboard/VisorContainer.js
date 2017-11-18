import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../../actions/indexActions.js'

class VisorContainer extends Component {

    getTarifaVisor() {
        switch (this.props.vehiculo) {
            case 'auto':
                if (this.props.tiempo == 'Estadia') {
                    return tarifa = this.props.estadiaAuto
                } else {
                    return tarifa = this.props.doctorAuto
                }
                break;

            case 'moto':
                if (this.props.tiempo == 'Estadia') {
                    return tarifa = this.props.estadiaMoto
                } else {
                    return tarifa = this.props.doctorMoto
                }
                break;

            case 'chata':
                if (this.props.tiempo == 'Estadia') {
                    return tarifa = this.props.estadiaChata
                } else {
                    return tarifa = this.props.doctorChata
                }
                break;
        }
        this.props.precioVisor(tarifa)
    }

    render() {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        vehiculo: state.tarifaVehiculo,
        tiempo: state.tarifaTiempo,
        estadiaAuto: state.tarifas.estadiaAuto,
        estadiaMoto: state.tarifas.estadiaMoto,
        estadiaChata: state.tarifas.estadiaChata,
        doctorAuto: state.tarifas.doctorAuto,
        doctorMoto: state.tarifas.doctorMoto,
        doctorChata: state.tarifas.doctorChata
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisorContainer)

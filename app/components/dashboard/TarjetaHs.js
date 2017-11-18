import React, { Component } from 'react';
import TarjetaGenerica from './TarjetaGenerica'

import moment from 'moment';

class TarjetaHs extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            contador: 0
        }
        this.tick = this.tick.bind( this );
    }
    tick() {
        this.setState( {
            contador: this.state.contador + 1
        } );
    }
    componentDidMount() {
        this.interval = setInterval( this.tick, 30000 );
    }
    componentWillUnmount() {
        clearInterval( this.interval );
    }
    shouldComponentUpdate( nextProps, nextState ) {
        const now = moment()
        const permanenciaSec = moment.duration( now.diff( this.props.horaIngreso ) ).seconds()
        if ( permanenciaSec < 2 ) {
            return true
        } else {
            return false
        }
    }
    render() {

        const now = moment()
        const ingreso = moment( this.props.horaIngreso ).calendar()
        const permanenciaMins = moment.duration( now.diff( this.props.horaIngreso ) ).minutes()
        const permanenciaHs = Math.floor( moment.duration( now.diff( this.props.horaIngreso ) ).asHours() )
            return ( <TarjetaGenerica
                texto1={'llego '}
                texto2={'hace '}
                tiempo1={permanenciaHs}
                tiempo2={permanenciaMins}
                ingreso={ingreso}
                color={'#C23627'}
                iconoVehiculo={this.props.vehiculo}
                chapa={this.props.chapa}
                />
              )
            }
          }
export default TarjetaHs

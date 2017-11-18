import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default class TarjetaHoraIngreso extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            contador: 0
        };
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

    render() {
        const now = moment()
        const permanenciaMins = moment.duration( now.diff( this.props.horaIngreso ) ).minutes()
        const permanenciaHs = Math.floor( moment.duration( now.diff( this.props.horaIngreso ) ).asHours() )
        return(
          <Text style={{fontSize: 25, color: '#000'}}>{permanenciaHs}h {permanenciaMins}m </Text>
    )}
}

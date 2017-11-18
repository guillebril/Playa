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
        this.interval = setInterval( this.tick, 60000 );
    }
    componentWillUnmount() {
        clearInterval( this.interval );
    }

    render() {
        const ingreso = moment(this.props.horaIngreso).calendar()

        return(
          <Text style={{fontSize: 18}}> {ingreso} </Text>
    )}
}

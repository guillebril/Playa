import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';
//ICONOS
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../fonts/selection.json';
const Icon = createIconSetFromIcoMoon( icoMoonConfig );

const TarjetaHocTimer = ( InnerComponent ) => class extends React.Component {
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
        this.interval = setInterval( this.tick, 1000 );
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
        return ( <InnerComponent {...this.props}/> )

    }
}

const Tarjeta = TarjetaHoc( ( props ) => )

export default class TarjetaHs extends Component {

    render() {
        const now = moment()
        const ingreso = moment( this.props.horaIngreso ).calendar()
        const permanenciaMins = moment.duration( now.diff( this.props.horaIngreso ) ).minutes()
        const permanenciaHs = moment.duration( now.diff( this.props.horaIngreso ) ).hours()

        return ( <View style={styles.borde}>
            <View style={styles.tar}>
                <View>
                    <Text style={styles.chapa}>
                        {this.props.chapa}

                    </Text>
                    <Icon name={this.props.vehiculo} size={40} color="#868686" style={styles.vehiculoIcono}/>
                </View>
                <View>
                    <Text style={styles.textSupDer}>
                        llego {ingreso}
                    </Text>
                    <View style={styles.tiempo}>
                        <Text style={styles.textQuedan}>
                            hace
                        </Text>
                        <Text style={styles.textbig}>
                            {permanenciaHs}h {permanenciaMins}m
                        </Text>
                    </View>
                </View>

            </View>
        </View> )
    }
}
const styles = StyleSheet.create( {

    borde: {
        elevation: 2,
        marginHorizontal: 5,
        marginVertical: 8,
        borderTopLeftRadius: 0.3,
        borderTopRightRadius: 0.3,
        borderWidth: 6,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#C23627',
        borderStyle: 'solid'
    },

    tar: {
        elevation: 2,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,

        maxWidth: 277,
        height: 100,
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
} )

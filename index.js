import React, { Component } from 'react';
import { AppRegistry, DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import moment from 'moment'
import 'moment/locale/es';
//components
import Keypad from './app/components/dashboard/Keypad'
import reducer from './app/reducers'
import TarjetasContenedor from './app/components/dashboard/TarjetasContenedor'
//Storage
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
moment.relativeTimeThreshold( 'm', 60 );
moment.relativeTimeThreshold( 'hh', 600 );
moment.defineLocale( 'es-guille', {
    parentLocale: 'es',
    calendar: {
        lastDay: '[ayer] LT',
        sameDay: '[hoy] LT',
        nextDay: '[mañana] LT',
        lastWeek: '[el] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {

        future: "%s",
        past: "%s ",
        s: '0m',
        ss: '0m',
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }
} );

moment.globalLocale = 'es-guille';

const engine = createEngine( 'my-save-key' );
const storageMiddleware = storage.createMiddleware( engine );
const reducer2 = storage.reducer( reducer );
const loggerMiddleware = createLogger( {
    predicate: ( getState, action ) => __DEV__
} )

function configureStore( initialState ) {
    const enhancer = compose( applyMiddleware( thunkMiddleware, loggerMiddleware, storageMiddleware ) )
    return createStore( reducer2, initialState, enhancer )
}
const store = configureStore( {} )
const load = storage.createLoader( engine );
load( store );
class App extends Component {
    render() {
        var navigationView = ( <View
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
            <Text
                style={{
                    margin: 10,
                    fontSize: 15,
                    textAlign: 'left'
                }}>I'm in the Drawer!</Text>
        </View> );
        return ( <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>

          {/*===Vista=====*/}
          <View style={styles.container}>
            <View style={styles.cardsscreen}>
              <TarjetasContenedor/>
            </View>
            <View style={styles.keypadscreen}>
              <Keypad/>
            </View>
          </View>

        </DrawerLayoutAndroid> );
    }
}
const Playa = () => ( <Provider store={store}>
  <App/>
</Provider> )
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
    },
    cardsscreen: {
        flex: 70
    },
    keypadscreen: {
        flex: 30,
        elevation: 20,
        backgroundColor: 'white'
    }
} );
AppRegistry.registerComponent( 'Playa', () => Playa );

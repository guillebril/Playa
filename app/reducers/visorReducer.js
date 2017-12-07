import createReducer from './createReducer'
import * as types from '../actions/types'
// createReducer( valor default, { [accion]  Tomo el estado de la accion, tomo la accion
// }) Reducer que afectan la patente.
export const chapa = createReducer( '', {
    [ types.BORRAR_CHAPA ]( state, action ) {
        return ''
    },
    [ types.BORRAR_CARACTER ]( state, action ) {
        return state.slice( 0, -1 )
    },
    [ types.AGREGAR_VALOR ]( state, action ) {
        //text tiene solo 3 caracters y cuando excede el input, borra los anteriores
        state.length >= 3 ?
            state = action.valor :
            state = state.concat( action.valor )
        return state
    },

} )

export const chapaVisor = createReducer( '', {
    [ types.BORRAR_CHAPA_VISOR ]( state, action ) {
        return ''
    },
    [ types.BORRAR_CARACTER ]( state, action ) {
        return state.slice( 0, -1 )
    },
    [ types.AGREGAR_VALOR_VISOR ]( state, action ) {
        //text tiene solo 3 caracters y cuando excede el input, borra los anteriores
        state.length >= 3 ?
            state = action.valor :
            state = state.concat( action.valor )
        return state
    },

})

//Reducers que afectan el tipo de tarifa seleccioanda.
export const tarifaTiempo = createReducer( '', {
    [ types.TOGGLE_TIEMPO ]( state, action ) {
        // Si ya esta seleccionada una tarifa de tiempo y apreto la misma, entonces la
        // deselecciono. sino la selecciono
        state == action.tiempo ?
            state = '' :
            state = action.tiempo
        return state
    }
} )
//Reducers que afectan el tipo de vehiculo seleccionado
export const tarifaVehiculo = createReducer( '', {
    [ types.TOGGLE_VEHICULO ]( state, action ) {
        // Si ya esta seleccionada una tarifa de tiempo y apreto la misma, entonces la
        // deselecciono. sino la selecciono
        state == action.vehiculo ?
            state = '' :
            state = action.vehiculo
        return state
    }
} )
export const precioVisor = createReducer( '', {
    [ types.TOGGLE_VEHICULO ]( state, action ) {
        return state = action.tarifa
    },
    [ types.TOGGLE_TIEMPO ]( state, action ) {
        return state = action.tarifa
    }
} )
export const cantDias = createReducer( 0, {
    [ types.MAS_CONTADOR_DIAS ]( state, action ) {
        state = state + 1
        return state
    },
    [ types.MENOS_CONTADOR_DIAS ]( state, action ) {
        state = state - 1
        return state
    },
    [ types.CONTADOR_EN_1 ]( state, action ) {
        state = 1
        return state
    }
} )
//Entrada xHS
export const vehiculos = createReducer( [], {
    [ types.ENTRAR_VEHICULO ]( state, action ) {
        return [
            ...state, {
                chapa: action.chapa,
                horaIngreso: action.horaIngreso,
                tarifa: action.tarifaTiempo,
                vehiculo: action.tarifaVehiculo,
                abierto: false
            }
        ]
    },
    [ types.ENTRAR_VEHICULO_DOC ]( state, action ) {
        return [
            ...state, {
                chapa: action.chapa,
                horaIngreso: action.horaIngreso,
                tarifa: 'Doctor',
                cantidad: action.cantidad,
                vehiculo: action.tarifaVehiculo,
                vencimiento: action.horaVencimiento,
                montoPagado: action.montoPagado
            }
        ]
    },

} )




export const toggleModal = createReducer(false, {
    [ types.TOGGLE_MODAL ]( state, action ) {
          state = !state
        return state
    }
} )

export const vehiculoEnModal = createReducer( [] , {
    [ types.VEHICULO_EN_MODAL ]( state, action ) {

        state = {
        chapa: action.chapa,
        horaIngreso: action.horaIngreso,
        tarifa: 'Doctor',
        cantidad: action.cantidad,
        vehiculo: action.tarifaVehiculo,
      }
        return state
    }
} )

export const tarifas = createReducer( {
    estadiaAuto: 30,
    doctorAuto: 15,
    estadiaMoto: 20,
    doctorMoto: 10,
    estadiaChata: 45,
    doctorChata: 20
}, {
    [ types.CAMBIAR_TARIFAS ]( state, action ) {
        return state
    }
} )

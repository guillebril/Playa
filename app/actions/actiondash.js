import * as types from './types'
export function borrarChapa() {
    return { type: types.BORRAR_CHAPA }
}
export function borrarChapaVisor() {
    return { type: types.BORRAR_CHAPA_VISOR }
}

export function borrarCaracter() {
    return { type: types.BORRAR_CARACTER }
}
export function masContadorDias() {
    return { type: types.MAS_CONTADOR_DIAS }
}
export function menosContadorDias() {
return { type: types.MENOS_CONTADOR_DIAS }
}
export function contadorEn1() {
    return { type: types.CONTADOR_EN_1 }
}
export function agregarValor( valor ) {
    return { type: types.AGREGAR_VALOR, valor }
}
export function agregarValorVisor( valor ) {
    return { type: types.AGREGAR_VALOR_VISOR, valor }
}
export function toggleIconoTiempo( tiempo, tarifa ) {

    return { type: types.TOGGLE_TIEMPO, tiempo, tarifa }
}
export function toggleIconoVehiculo( vehiculo, tarifa ) {
    return { type: types.TOGGLE_VEHICULO, vehiculo, tarifa }
}
export function entrarVehiculo( chapa, tarifaTiempo, tarifaVehiculo, horaIngreso ) {
    return { type: types.ENTRAR_VEHICULO, chapa, tarifaTiempo, tarifaVehiculo, horaIngreso }
}
export function entrarVehiculoDoc( chapa, tarifaTiempo, tarifaVehiculo, horaIngreso ) {
    return { type: types.ENTRAR_VEHICULO_DOC, chapa, tarifaTiempo, tarifaVehiculo, horaIngreso }
}
export function toggleModal() {
    return { type: types.TOGGLE_MODAL }
}

export function vehiculoEnModal(chapa, horaIngreso, tarifaTiempo, tarifaVehiculo  ) {
    return { type: types.VEHICULO_EN_MODAL, chapa, horaIngreso, tarifaTiempo, tarifaVehiculo    }
}

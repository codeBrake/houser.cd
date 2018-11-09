let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
}
const GET_NAME = 'GET_NAME'
const GET_ADDRESS = 'GET_ADDRESS'
const GET_CITY = 'GET_CITY'
const GET_STATE = 'GET_STATE'
const GET_ZIPCODE = 'GET_ZIPCODE'

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_NAME:
        return{...state, name: action.payload}

        case GET_ADDRESS:
        return{...state, address: action.payload}

        case GET_CITY:
        return Object.assign({}, state, {city: action.payload})

        case GET_STATE:
        return{...state, state: action.payload}
        
        case GET_ZIPCODE:
        return{...state, zipcode: action.payload}

        default: 
        return state
    }

}

export function getName(name){
    return{
        type: GET_NAME,
        payload: name
    }
}
export function getAddres(address){
    return{
        type: GET_ADDRESS,
        payload: address
    }
}
export function getCity(city){
    return{
        type: GET_CITY,
        payload: city
    }
}
export function getState(state){
    return{
        type: GET_STATE,
        payload: state
    }
}
export function getZipCode(zipcode){
    return{
        type: GET_ZIPCODE,
        payload: zipcode
    }
}
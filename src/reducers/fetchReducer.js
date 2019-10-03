import { FETCH_API } from '../actions/types'

const initialState = {
    data: [],
    threeHrData: {},
    dailyData: {},
    cityname: '',
    country: '',
    currentTemp: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_API:
            return{
                ...state,
                data: action.payload,
                threeHrData: action.threeHrData,
                dailyData: action.dailyData,
                cityname: action.cityname,
                country: action.country,
                currentTemp: action.currentTemp
            }
        default:
            return state;
    }
}
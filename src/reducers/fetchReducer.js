import { START_FETCH_API, FETCH_API } from '../actions/types'

const initialState = {
    data: [],
    loading: true,
    threeHrData: {},
    dailyData: {},
    cityname: '',
    country: '',
    currentTemp: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case START_FETCH_API:
            return{
                ...state,
                data: action.payload,
                loading: action.loading,
            }

        case FETCH_API:
            return{
                ...state,
                data: action.payload,
                loading: action.loading,
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
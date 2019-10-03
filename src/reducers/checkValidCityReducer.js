import { VALID_CITY, DUPLICATE_CITY , CITY_NOT_FOUND} from '../actions/types'
import constant from '../Constant.js'

const initialState = {
    recommendations: [],
    cityname: constant.defaultCityName,
    error: '',
    duplicate: false
}

export default function(state = initialState, action){
    switch(action.type){
        case VALID_CITY:
            
            return{
                ...state,
                recommendations: action.recommendations,
                cityname: action.cityname,
                error: action.error,
                duplicate: false
            }

        case DUPLICATE_CITY:
            //console.log(action.recommendations)
            return{
                ...state,
                recommendations: action.recommendations,
                cityname: action.cityname,
                error: action.error,
                duplicate: true
            }

        case CITY_NOT_FOUND:

            return{
                ...state,
                recommendations: action.recommendations,
                cityname: action.cityname,
                error: action.error,
                duplicate: false
            }
        default:

            return state;
    }
}
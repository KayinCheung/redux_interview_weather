import { DATE_SELECTION } from '../actions/types'
import { ON_API_LOAD } from '../actions/types'

const initialState = {
    date: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case ON_API_LOAD:
            return{
                ...state,
                date: action.date
            }
        case DATE_SELECTION:
            return{
                ...state,
                date: action.date
            }
        default:
            return state;
    }
}
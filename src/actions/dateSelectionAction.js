import { DATE_SELECTION } from './types'

//When clicking the individual dates on row of daily forecast
export const handleDateSelection = (date) => dispatch =>{
    dispatch({
        type: DATE_SELECTION,
        date: date
    })
}
        
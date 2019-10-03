
import moment from 'moment'

export function offsetDateTime(current, offset){
    
    return (moment(current).add(offset, 'hours').format('YYYY-MM-DD hh a'))
}

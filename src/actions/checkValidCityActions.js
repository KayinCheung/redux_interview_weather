import { VALID_CITY, DUPLICATE_CITY, CITY_NOT_FOUND } from './types'
import { fetchAPI } from './fetchActions';

import cities from '../data/modifiedCityList.json'
import duplicate_cities from '../data/duplicateCities.json'

export const checkValidCity = (city) => dispatch =>{

    if (city in cities){
        let cityid = cities[city]["id"]
        dispatch({
            type: VALID_CITY,
            recommendations: [],
            cityname: city,
            error: ''
        })
        dispatch(fetchAPI(cityid))
      } else if (city in duplicate_cities){
        //Duplicate cities, Show all recommendations
        console.log("duplicate")
        console.log(duplicate_cities[city])
        dispatch({
            type: DUPLICATE_CITY,
            recommendations: duplicate_cities[city],
            cityname: city,
            error: ''
        })
      
      } else{
        //City not found, pop error msg
        dispatch({
            type: CITY_NOT_FOUND,
            recommendations: [],
            cityname: city,
            error: 'City not found. Please try again'
        })
      }


    
}
        
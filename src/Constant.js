

const defaultCityId = 1819729 //HK
const defaultCityName = 'Hong Kong' //HK
const defaultTimespan = '3h' //'3h' or 'daily'
const APIKey = 'aac94666fd0b8641675125039b6e6c22'
const unit = 'metric'

const month_map = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

module.exports = {
    defaultCityId: defaultCityId,
    defaultCityName: defaultCityName,
    defaultTimespan: defaultTimespan,
    APIKey: APIKey,
  
    unit: unit,
    month_map: month_map
}
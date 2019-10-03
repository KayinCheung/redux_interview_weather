## Building and running the project

- Requirements: Recent version of Node - https://nodejs.org/en/download/
- Download and unzip the repository.
- `npm install`, then `npm start` to run it locally in your browser. 
Or visit https://interviewtest2.github.io/ to view the project deployed on github pages.
- `npm run build` to build the project for deployment

## Testing

On page load, Hong Kong's weather forecast is loaded by default.

Try inputs in the input field. Click the search button or Enter key. There's 3 scenarios

1) Invalid city - No city is found for the input. An error message to try again will appear.
2) Valid, non duplicated city - A city is found, and the city's name is unique. The site will show today + next 5 days forecast.
3) Valid, duplicated city - A city found, but the city's name is shared among different countries (Eg: London is a city in USA, Canada, UK).
All valid cities and their countries will show up as suggestions. Click on one of the suggestions to view weather forecast.

After weather forecast is loaded from scenario 2 and 3. Click on one of the dates to drill down into 3hr forecasts for that day.
Check that the min and max temp in daily forecast corresponds to min and max from all the 3hr forecast for that day, and the daily forecast shows the worst weather from all 3hr forecasts.



## Assumptions

1) Cleaning up the city list from: http://bulk.openweathermap.org/sample/ (city.list.json.gz)

There's instances of the same city/country combination but with coordinates just fractions off each other. To simplify the issue, assume if cities share the same name AND country, they are duplicates and only one copy is kept.

2) After cleaning duplicates from 1), assume the list is fully accurate. In reality, there's cities with empty string or "-" as city name.

3) Current and today's weather data is just as important as the next 5 days, hence it's also included.

4) End users are not on keypad based feature phones, app not tested on those device.

5) For the daily summary, assume that most useful data for wind and weather conditions is the max wind speed and worst weather conditions respectively for that day.

List of weather conditions: https://openweathermap.org/weather-conditions

From the day's 3hr data, get the highest weather code that's below 800. If none are below 800, get the highest code. Eg: Tornado > any snow > any rain > cloudy conditions.

6) Users are interested to know the weather conditions in the local time zone of the area they searched, and not their own time zone or GMT.

7) For this test, it is fine to store the city lists locally, rather than load from a server.

## Limitations
- API shows next 40 instance of 3hr forecast. It's usually partial data of today (1st day), next 5 days, where the final day has partial data.
For a 3hr period each day, API shows today (full day), plus next 4 full days. When this happens, the front-end will show today + next 4 days. Due to API limitation, the project cannot always show the final required day.

## Preprocessed Data

city.list.json

Originally an array of city objects. It was processed using these steps

1) Only keep the first copy if City name AND country match.
2) For unique city names - Object where City name is key, object of relevant info as value.
3) For city name with duplicates - Object where city name is key, value is Object (where country is key, cityid as value.)

Goal of processing was to ensure constant time retrieval of city names and city name is a unique key.

unique cities json:
```
{
   "hurzuf":{
      "id":707860,
      "c":"ua",
      "d":false
   },
}
```

duplicate cities json:
```
{
   "london":{
      "CA":6058560,
      "GB":2643743,
      "US":5056033
   }
}
```


### Running the preprocessing script

 - Requirements: Install latest stable version of Python 3 and Pandas.

 Pandas: https://pandas.pydata.org/pandas-docs/stable/install.html

 Python 3: https://www.python.org/downloads/

 Download city.list.json.gz from http://bulk.openweathermap.org/sample/, unzip the json file to Python folder in this repo.
 Run jsonmod.py, it will output 2 files, modifiedCityList.json and duplicateCities.json.


 ### Built with redux

 Previous non-redux version here: https://github.com/KayinCheung/interview_weather
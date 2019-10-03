import pandas as pd
import json

def cleanList():
    #Open file
    f = open("city.list.json",  encoding="utf8")
    content = f.read()
    f.close()

    #Load to dataframe
    df = pd.read_json(content)

    #Set all city name (keys) to lower case
    df["name"] = df["name"].str.lower()

    df["c"] = df["country"].str.lower()

    #Drop duplicates when name and country is same, keep first copy
    df["name_country"] = df["name"] + "," +df["country"]
    df.drop_duplicates(subset="name_country",keep="first", inplace=True)

    #Mark and handle duplicated cities
    df["d"] = df.duplicated(subset=["name"], keep=False)


    #Get all duplicated city names, use for later
    duplicated_cities = df[df.duplicated(subset=["name"], keep=False)]
    #Handle duplicates here


    df.drop(columns=["name_country", "coord", "country"], inplace=True)

    #Set name as key, drop all rows that's duplicated.

    df.drop_duplicates(subset="name", keep=False, inplace=True)

    df.set_index("name", inplace=True)

    #Convert back to JSON. JSON for all unique city names
    df.to_json(r'modifiedCityList.json', orient="index")

    handleDuplicates(duplicated_cities)
    #Work with duplicated city names

def handleDuplicates(df):
    # Dictionary, key = city
    # Value = dictionary with key of country, value of cityid

    cities = {}
    for index, row in df.iterrows():
        if row["name"] not in cities:
            cities[row["name"]] = {}

        cities[row["name"]][row["country"]] = row["id"]

    f = open("duplicateCities.json", "w+")
    output = json.dumps(cities, sort_keys=True)
    f.write(output)
    f.close()

pd.set_option('display.max_columns', 500)
pd.set_option('display.max_rows', 500)
cleanList()
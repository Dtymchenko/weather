import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Weather({ weather }) {

    const obj = {
    "base": "stations",
    "clouds": {"all": 100},
    "cod": 200,
    "coord": {"lat": 50.4445, "lon": 30.5225},
    "dt": 1670780724,
    "id": 703447,
    "main": {"feels_like": 10.97,
    "humidity": 94, 
    "pressure": 992,
    "temp": 11.33,
    "temp_max": 11.33,
    "temp_min": 10.16},
    "name": "Kyiv",
    "rain": {"1h": 0.76},
    "sys": {
        "country": "UA",
        "id": 2003742,
        "sunrise": 1670737694,
        "sunset": 1670766847,
        "type": 2},
        "timezone": 7200,
        "visibility": 10000,
        "weather": [{
            "description": "light rain",
            "icon": "10n",
            "id": 500,
            "main": "Rain"
        }],
        "wind": {"deg": 262, "gust": 3.13, "speed": 0.45}}
    

    // console.log(weather)
    console.log(obj)
    // console.log(obj['temp'])

    return (
        <View style={styles.cont}>
            {obj.temp}
            <Text>{weather.name}</Text>
            {/* <Text>{obj.name}</Text> */}
            <Text>{obj.base}</Text>
            {/* <Text>{weather.weather}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

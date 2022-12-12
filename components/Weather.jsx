import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function Weather({ weather }) {

    // console.log(weather)
    

    return (
        <View style={styles.cont}>
            <View style={styles.half}>
                <View style={styles.main}>
                    <View style={styles.main1}>
                        <Ionicons name="rainy" size={64} color="black"/>
                    </View>
                    <View style={styles.main2}>
                        <Text style={{width: 100, textAlign: "center"}}>{weather.weather[0].main}</Text>
                    </View>
                </View>
                <Text>City: {weather.name}, {weather.sys.country}</Text>
                <Text>Current temperature: {Math.round(weather.main.temp)}°</Text>
                <Text>Feels like: {Math.round(weather.main.feels_like)}°</Text>
                <Text>Pressure: {Math.round(weather.main.pressure)}</Text>
                <Text>Humidity: {Math.round(weather.main.humidity)}</Text>
            </View>
            <View style={styles.half}>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingHorizontal: 5,
    },
    half: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        // display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    main1: {
        backgroundColor: "yellow",
    },
    main2: {
        backgroundColor: "red",
    },
})

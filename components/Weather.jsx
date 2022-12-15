import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { weatherDetails } from './weatherDetails.jsx';
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ weather }) {

    const [currentWeather, setCurrentWeather] = React.useState({});

    React.useEffect(() => {
        setCurrentWeather(weather?.weather?.[0]?.main);
    }, [weather]);

    return (
            <LinearGradient style={styles.cont} colors={weatherDetails?.[currentWeather]?.gradient ? weatherDetails?.[currentWeather]?.gradient : ["#fff", "#aaa"] }>
                <View style={styles.half1}>
                    <View style={styles.main}>
                        <MaterialCommunityIcons style={styles.main1} name={weatherDetails?.[currentWeather]?.icon} size={96} color="white"/>
                        <Text style={styles.main2}>{weather?.weather?.[0]?.main}</Text>
                    </View>
                    <Text style={styles.text}>City: {weather?.name}, {weather?.sys?.country}</Text>
                    <Text style={styles.text}>Current temperature: {Math.round(weather?.main?.temp)}°</Text>
                    <Text style={styles.text}>Feels like: {Math.round(weather?.main?.feels_like)}°</Text>
                    <Text style={styles.text}>Pressure: {Math.round(weather?.main?.pressure)}</Text>
                    <Text style={styles.text}>Humidity: {Math.round(weather?.main?.humidity)}</Text>
                </View>
                <View style={styles.half2}>
                    <Text style={styles.text_title}>{weatherDetails?.[currentWeather]?.title}</Text>
                    <Text style={styles.text_subtitle}>{weatherDetails?.[currentWeather]?.subTitle}</Text>
                </View>
            </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    half1: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    half2: {
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-start",
        marginHorizontal: 20
    },
    main: {
        alignItems: "center",
        justifyContent: "center",
    },
    main1: {
        flex: 0,
    },
    main2: {
        textAlign: "center",
        flexWrap: "wrap",
        textAlignVertical: "center",
        flex: 0,
        fontSize: 40,
        color: "white",
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: "white",
        marginBottom: 5,
    },
    text_title: {
        fontSize: 30,
        fontWeight: '900',
        marginBottom: 15,
        color: "white",
        textAlign: "center",
    },
    text_subtitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
        color: "white",
        textAlign: "center",
    }
})

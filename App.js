import { StyleSheet, Text, View, StatusBar, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import React from "react";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

export default function App() {
  const API_KEY = "fd881d906a7e39a1f689ef8ade4b4ba4";
  const [isLoading, setIsLoading] = React.useState(true);
  const [weather, setWeather] = React.useState({});

  async function getWeather(lat, long) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );
    setWeather(res.data);
    // console.log(weather);
  }

  async function getLocation() {
    try {
      setIsLoading(true);
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't define location", error.message);
    } finally {
      setIsLoading(false);
    }
  }
  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden="false" />
      {isLoading ? <Loading /> : <Weather weather={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

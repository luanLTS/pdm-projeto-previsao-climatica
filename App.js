import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { getData } from "./services/OpenWeatherService";

export default function App() {
    useEffect(() => {
        getData("Itu")
            .then((res) => {
                console.log(res.data.list[5].main.temp_min);
                console.log(res.data.list[5].main.temp_max);
                console.log(res.data.list[5].weather[0].icon);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <View style={styles.container}>
            <Text>aaaaaaaadasdasasasdasdsadasdas</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

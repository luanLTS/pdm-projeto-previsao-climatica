import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getData } from "../services/OpenWeatherService";
import { Button, Image, Input, ListItem } from "@rneui/themed";
import ListComponent from "./ListComponent";
import { saveHistory } from "../services/OracleService";

const SearchComponent = () => {
    const [state, setState] = useState({
        searchTerm: "",
        forecastList: [],
    });

    function renderItem({ item }) {
        return (
            <ListItem>
                <Image
                    source={{
                        uri: `http://openweathermap.org/img/wn/${item.icon}@4x.png`,
                    }}
                    containerStyle={styles.img}
                />
                <ListItem.Content style={styles.info}>
                    <ListItem.Title>{item.dateTime}</ListItem.Title>
                    <ListItem.Subtitle>
                        Temperatura Máxima {Math.ceil(item.tempMax)} °C
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                        Temperatura Miníma {Math.ceil(item.tempMin)} °C
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    const onSearch = () => {
        let cidade = state.searchTerm;
        saveHistory(cidade);
        getData(cidade)
            .then((res) => {
                return res.data.list;
            })
            .then((list) => {
                const filteredForecastList = list.map((forecast) => {
                    return {
                        tempMin: forecast.main.temp_min,
                        tempMax: forecast.main.temp_max,
                        icon: forecast.weather[0].icon,
                        dateTime: forecast.dt_txt,
                    };
                });
                return filteredForecastList;
            })
            .then((filtered) => {
                setState({ forecastList: filtered });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <SafeAreaView style={styles.container}>
            <Input
                label={"Cidade"}
                placeholder="Ex: Itu"
                leftIcon={{ type: "feather", name: "search" }}
                value={state.searchTerm}
                onChangeText={(newValue) => setState({ searchTerm: newValue })}
            />
            <ScrollView>
                <ListComponent
                    data={state.forecastList}
                    renderItem={renderItem}
                />
            </ScrollView>
            <Button title="Buscar previsões" onPress={onSearch} />
        </SafeAreaView>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 10,
    },
    img: {
        aspectRatio: 1,
        flex: 1,
    },
    info: {
        flex: 3,
    },
});

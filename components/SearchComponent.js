import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getData } from "../services/OpenWeatherService";

import { Button, Input } from "@rneui/themed";

const SearchComponent = () => {
    const [state, setState] = useState({
        searchTerm: "",
    });

    const onSearch = () => {
        console.log(state.searchTerm);
        getData(state.searchTerm)
            .then((res) => {
                console.log(res.data.list[5].main.temp_min);
                console.log(res.data.list[5].main.temp_max);
                console.log(res.data.list[5].weather[0].icon);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <View style={styles.container}>
            <Input
                label={"Cidade"}
                placeholder="Ex: Itu"
                //tá descontrolado porque não está guardando nada, está de enfeite.
                leftIcon={{ type: "feather", name: "search" }}
                value={state.searchTerm}
                onChangeText={(newValue) => setState({ searchTerm: newValue })}
            />
            <Button title="Buscar previsões" onPress={onSearch} />
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});

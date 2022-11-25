import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, ListItem } from "@rneui/themed";
import { getHistory } from "../services/OracleService";
import ListComponent from "./ListComponent";

const HistoryComponent = () => {
    const [historyForecast, setHistoryForecast] = useState([]);

    useEffect(() => {
        getHistoryForecast();
    }, []);

    const getHistoryForecast = () => {
        getHistory()
            .then((res) => {
                setHistoryForecast(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function renderItem({ item }) {
        return (
            <ListItem>
                <ListItem.Content style={styles.item}>
                    <ListItem.Title style={styles.title}>
                        {new Date(item.data_previso).toLocaleDateString()}
                    </ListItem.Title>
                    <ListItem.Title style={styles.title}>
                        {item.cidade.toUpperCase()}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    }
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <ListComponent
                        data={historyForecast}
                        renderItem={renderItem}
                    />
                </ScrollView>
                <Button onPress={getHistoryForecast} title={"Atualizar"} />
            </SafeAreaView>
        </View>
    );
};

export default HistoryComponent;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    title: {
        flex: 1,
        textAlign: "center",
    },
});

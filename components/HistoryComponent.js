import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, ListItem } from "@rneui/themed";
import { getHistory } from "../services/OracleService";
import ListComponent from "./ListComponent";

const HistoryComponent = () => {
    const [historyForecast, setHistoryForecast] = useState([]);

    useEffect(() => {
        getHistoryForecast();
    }, []);

    const sortItems = (list) => {
        list.sort((a, b) => {
            if (a.cidade < b.cidade) {
                return -1;
            }
            if (a.cidade > b.cidade) {
                return 1;
            }
            return 0;
        });
        setHistoryForecast(list);
    };

    const getHistoryForecast = () => {
        getHistory()
            .then((res) => {
                sortItems(res.data.items);
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
        <SafeAreaView style={styles.container}>
            <ListComponent data={historyForecast} renderItem={renderItem} />
            <Button onPress={getHistoryForecast} title={"Atualizar"} />
        </SafeAreaView>
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
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 10,
    },
});

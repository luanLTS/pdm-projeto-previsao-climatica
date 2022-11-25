import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, ListItem } from "@rneui/themed";
import { getHistory } from "../services/OracleService";
import ListComponent from "./ListComponent";

const HistoryComponent = () => {
    const [historyForecast, setHistoryForecast] = useState([]);

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
                <ListItem.Content style={styles.info}>
                    <ListItem.Title>{item.cidade}</ListItem.Title>
                    <ListItem.Title>
                        {new Date(item.data_previso).toLocaleDateString()}
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

const styles = StyleSheet.create({});

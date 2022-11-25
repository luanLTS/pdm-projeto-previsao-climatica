import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Tab, TabView } from "@rneui/themed";
import { useState } from "react";

import SearchScreen from "./screens/SearchScreen";
import HistoryScreen from "./screens/HistoryScreen";

export default function App() {
    const [index, setIndex] = useState(0);
    SearchScreen;
    return (
        <View style={styles.container}>
            <Tab
                value={index}
                onChange={(newIndex) => setIndex(newIndex)}
                indicatorStyle={{ backgroundColor: "#ff0" }}
                variant="primary"
            >
                <Tab.Item
                    title={"Busca"}
                    icon={{ type: "feather", name: "search", color: "white" }}
                />
                <Tab.Item
                    title={"Historico"}
                    icon={{ type: "feather", name: "clock", color: "white" }}
                />
            </Tab>
            <TabView
                value={index}
                onChange={setIndex}
                animationType="timing"
                containerStyle={styles.view}
            >
                <TabView.Item style={styles.view}>
                    <SearchScreen />
                </TabView.Item>
                <TabView.Item style={styles.view}>
                    <HistoryScreen />
                </TabView.Item>
            </TabView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    view: {
        flex: 1,
    },
});

import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

const ListComponent = (props) => {
    return (
        <View>
            <FlatList data={props.data} renderItem={props.renderItem} />
        </View>
    );
};

export default ListComponent;

const styles = StyleSheet.create({});

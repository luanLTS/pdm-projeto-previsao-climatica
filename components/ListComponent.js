import { FlatList } from "react-native";
import React from "react";

const ListComponent = (props) => {
    return <FlatList data={props.data} renderItem={props.renderItem} />;
};

export default ListComponent;

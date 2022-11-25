import { FlatList, StyleSheet, Text, View } from "react-native";
import { ListItem, Image } from "@rneui/themed";
import React from "react";

const ListComponent = (props) => {
    //uma função que irá receber o dado por parametro
    // construir o html apresentando esse dado e retornar o HTML

    /*
    item = {
        max: 23,
        min: 10,
        dataHora: "20-10-2022T00:00:00z",
        icone: "10n",
    };
*/
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

    return (
        <View>
            <FlatList data={props.data} renderItem={renderItem} />
        </View>
    );
};

export default ListComponent;

const styles = StyleSheet.create({
    img: {
        aspectRatio: 1,
        flex: 1,
    },
    info: {
        flex: 3,
    },
});

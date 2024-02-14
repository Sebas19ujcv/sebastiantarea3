import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class menu extends React.Component {

    render(){
        return (
            <view styles={styles.containe}>
                <text>menu</text>
            </view>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: 'center',
    }
})
import React from "react";
import { View, StyleSheet } from "react-native";
import { FeaturedVideo, AppMenu } from "../../components/ui";

const Main = () => {

    return (
        <View style={styles.content}>
            <FeaturedVideo />
            <AppMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        justifyContent: 'space-around',
        backgroundColor: '#040404',
        height: '100%'
    },
})

export default Main;

import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Text,
} from "react-native";

const tendingNow = require('../../config/data.json').TendingNow;

const TrendVideos = () => {
    ////problem with static urlcant require like require('../../assets/' + variable)
    const imageUrl = [require('../../assets/https_specials-1.png'), require('../../assets/https_specials-2.png'),
    require('../../assets/https_specials-3.png'), require('../../assets/https_specials-4.png'), require('../../assets/https_specials-5.png'),
    require('../../assets/https_specials-6.png'), require('../../assets/https_specials-7.png'), require('../../assets/https_specials-8.png'),
    require('../../assets/https_specials-1.png'), require('../../assets/https_specials-2.png'),
    require('../../assets/https_specials-3.png'), require('../../assets/https_specials-4.png'), require('../../assets/https_specials-5.png'),
    require('../../assets/https_specials-6.png'), require('../../assets/https_specials-7.png'), require('../../assets/https_specials-8.png'),
    require('../../assets/https_specials-1.png'), require('../../assets/https_specials-2.png'),]
    return (
        <View style={styles.screen}>
            <Text>Trending Now</Text>
            <FlatList
                style={styles.channels}
                data={tendingNow}
                horizontal
                keyExtractor={(item) => {
                    return item.Id;
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.TitleImage}>
                        <Image resizeMode="contain" source={imageUrl[index]} style={styles.TitleImage} />
                    </TouchableOpacity>
                )}
            />
        </View >
    )
}

const styles = StyleSheet.create({

    TitleImage: {
        width: 80,
        height: 150,
        marginHorizontal: 3
    },
});

export default TrendVideos;
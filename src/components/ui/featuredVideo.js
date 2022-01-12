import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import { TrendVideos } from ".";

import CoverImage from "../../assets/FeaturedCoverImage.png";
import TitleImage from "../../assets/FeaturedTitleImage.png";
const featured = require('../../config/data.json').Featured;

const FeaturedVideo = () => (
    <View style={styles.screen}>
        <ImageBackground source={CoverImage} resizeMode="cover" style={styles.image}>
            <Text style={styles.category}>{featured.Category}</Text>
            <Image resizeMode="contain" source={TitleImage} style={styles.TitleImage} />
            <Text>{featured.ReleaseYear} {featured.MpaRating} {featured.Duration}</Text>
            <Text>{featured.Description}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button}><Text style={{ color: '#000' }}>Play</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#2727F5' }]}><Text>More Info</Text></TouchableOpacity>
            </View>
        </ImageBackground >
        <TrendVideos />
    </View >
)

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 80,
        flex: 1,
    },
    category: {
        color: '#858688'
    },
    image: {
        height: 300,
        justifyContent: "center",
    },
    TitleImage: {
        width: '50%',
        resizeMode: "contain",
        height: 30
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 25,
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        margin: 5
    }

});


export default FeaturedVideo;
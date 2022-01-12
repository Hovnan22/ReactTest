import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    Dimensions,
    NativeModules,
    LayoutAnimation,
    TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import icon1 from '../../assets/icons/Group46.png';
import icon2 from '../../assets/icons/Group53.png';
import icon3 from '../../assets/icons/Group56.png';
import icon4 from '../../assets/icons/Group47.png';
import icon5 from '../../assets/icons/Group54.png';
import Search from '../../assets/icons/ICON-Search.png';
import image from '../../assets/https_specials-2.png';

const { width, height } = Dimensions.get('window');

const { UIManager } = NativeModules;

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const Menu = () => {

    const [animatedOpen, setAnimatedOpen] = useState(false);
    const [opened, setOpened] = useState(false);



    const onAnimatedOpen = () => {
        setAnimatedOpen(!animatedOpen);
        if (!animatedOpen)
            setOpened(true)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, () => { setOpened(!animatedOpen) });
    }

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={opened ? ['#040404', '#04040450', '#04040400'] : ['#040404', '#040404', '#040404']}
            style={[styles.menuContainer, { width: !animatedOpen ? 80 : width }]}>

            <TouchableOpacity activeOpacity={1}
                style={[styles.menuContainer, { width: !animatedOpen ? 80 : width }]}
                onPress={onAnimatedOpen}
            >
                <View style={{ height: 50 }}>
                    {opened && (
                        <View style={styles.header}>
                            <Image source={image} style={styles.avatar} />
                            <Text style={styles.name}>Daniel</Text>
                        </View>
                    )}
                </View>
                <View style={{ top: 50 }}>
                    <TouchableOpacity style={[styles.button, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={Search} style={styles.icon} />
                        {opened && <Text style={styles.text}>Search</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.selected, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={icon1} style={styles.icon} />
                        {opened && <Text style={[styles.text, styles.selectedText]}>Home</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={icon5} style={styles.icon} />
                        {opened && <Text style={styles.text}>TV Shows</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={icon2} style={styles.icon} />
                        {opened && <Text style={styles.text}>Movies</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={icon3} style={styles.icon} />
                        {opened && <Text style={styles.text}>Genres</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { width: !animatedOpen ? 60 : 150 }]}>
                        <Image source={icon4} style={styles.icon} />
                        {opened && <Text style={styles.text}>Watch Later</Text>}
                    </TouchableOpacity>
                </View>
                <View style={{ bottom: 50, position: 'absolute' }}>
                    {opened && (
                        <View>
                            <TouchableOpacity style={styles.footrBtn}><Text>Language</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.footrBtn}><Text>Get Help</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.footrBtn}><Text>Exit</Text></TouchableOpacity>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        margin: 18
    },

    menuContainer: {
        alignItems: 'stretch',
        height,
        padding: 5,
        position: 'absolute',
        zIndex: 1
    },
    text: { fontSize: 17, marginRight: 18 },
    selectedText: { fontWeight: '700' },
    selected: {
        backgroundColor: '#3B486D'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: "center",
        borderRadius: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 20
    },
    footrBtn: {
        fontSize: 15,
        color: '#858688',
        padding: 2,
        paddingLeft: 15,
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15

    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 15
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15,
    }
});

export default Menu;
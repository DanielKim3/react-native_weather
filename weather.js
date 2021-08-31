import React from "react";
import {View, Text, StyleSheet} from "react-native"
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather ({ temp }) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="'weather-lighting-rainy" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
         <View style={styles.halfContainer} />
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstrom", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust" ]).isRequired
};

const styles = StyleSheet.create({    
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
});
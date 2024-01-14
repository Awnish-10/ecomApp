import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
interface Props {
    text: string;
    testID?: string
    placeholder: string;
    showTitle?: boolean;
    error?: boolean;
    onChangeText: React.Dispatch<React.SetStateAction<any>>;

}

const CustomInput: React.FC<Props> = ({ error, testID, showTitle = true, text, placeholder, onChangeText }) => {
   


    return (
        <View style={styles.container}>
            {showTitle && <Text style={styles.title}>{placeholder}</Text>}
            <View style={styles.searchSection}>
            
                <TextInput
                    placeholderTextColor="#94A3B8"
                    testID={testID}
                    style={[styles.input, { borderColor: `${error ? 'red' : 'grey'}` }]}
                    placeholder={placeholder} 
                    // placeholderTextColor="grey"
                    value={text}
                    onChangeText={(text) => onChangeText(text)}
                    // secureTextEntry={!showPassword}
                />
            
            </View>
        </View>)
}
export default CustomInput
const styles = StyleSheet.create({
    title: {
        color: "#B6C4B6",
        fontSize: 12,
        fontWeight: "700",
        marginBottom: 4,
    },
    container: {
        marginBottom: 16,
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#94A3B8',
        backgroundColor: '#EEF0E5',
        padding: 10,
        color: "#163020"
    },
    button: {
        marginTop: 24,
        backgroundColor: '#1e88e5',
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    searchSection: {
        position: "relative"
    },
    searchIcon: {
        position: "absolute",
        zIndex: 100,
        top: "25%",
        right: 10
    }
});

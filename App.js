import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, View, Image, SafeAreaView } from 'react-native';
// import {Image} from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.timerText}>25:00</Text>
        <View
            style = {{
                width: '25%',
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            }}>
            <Image
                source={{
                    width: 40, height: 40,
                    uri: "https://github.com/bengant3/pomo/blob/main/assets/playbutton.png?raw=true"}} />
            <Image
                source={{
                    width: 40, height: 40,
                    uri: "https://github.com/bengant3/pomo/blob/main/assets/resetbutton.png?raw=true"}} />
        </View>
      <TouchableOpacity onPress={() =>
          Alert.alert("Title", "Message")}>
        <Image
            source={{
              width: 200,
              height: 50,
              uri: "https://picsum.photos/200/50",
            }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'indianred',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        color: 'white',
        fontFamily: 'courier',
        fontSize: 90
    },
    goldenrod: {
        backgroundColor: "#daa520"
    }
});

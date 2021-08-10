import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, Image, SafeAreaView } from 'react-native';
// import {Image} from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.timerText}>25:00</Text>
        {/*<StatusBar style={styles.goldenrod}>*/}
        {/*    <Text >status bar</Text>*/}
        {/*</StatusBar>*/}
        <View
            style = {{
                flex: 1,
                flexDirection: "row",
            }}>
            <Image source={require("./assets/icon.png")} />
            <Image source={require("./assets/resetbutton.png")} />
        </View>
      <TouchableOpacity onPress={() =>
          Alert.alert("Title", "Message")}>
        <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
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
        fontSize: 44
    },
    goldenrod: {
        backgroundColor: "#daa520"
    }
});

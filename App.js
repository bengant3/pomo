import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, View, Image, SafeAreaView } from 'react-native';

let mins = 25;
let secs = 0;
let isPlaying = false;
var x;


function Timer(props) {
    return (
        <Text style={styles.timerText}>
            {getTimerString(props.mins, props.secs)}
        </Text>
        )
}

function getPlayPauseImage(playing) {
    if(playing) {
        return "https://github.com/bengant3/pomo/blob/main/assets/pausebutton.png?raw=true";
    } else {
        return "https://github.com/bengant3/pomo/blob/main/assets/playbutton.png?raw=true";
    }
}

function getTimerString(m, s) {
    let ret = "";
    ret += m.toString() + ":";
    if(s < 10 ) ret += "0";
    ret += s.toString();
    return ret;
}

function toggleTimer() {
    if(isPlaying) {
        clearInterval(x);
        isPlaying = false;
    } else {
        x = setInterval(timerCountDown, 1000);
        isPlaying = true;
    }
}

function reset() {
    clearInterval(x);
    mins = 25;
    secs = 0;
    printTime(mins,secs);
    isPlaying = false;
}

function timerCountDown() {
    --secs;
    if(secs < 0 ) {
        secs = 59;
        --mins;
    }

    printTime(mins, secs);

    // If the count down is finished, write some text
    if (secs == 0 && mins == 0) {
        clearInterval(x);
    }
}

function printTime(mins, secs) {
    let ret = "";
    if(mins < 10) ret = "0";
    ret += mins + ":";
    if(secs < 10) ret += 0;
    ret += secs;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Timer
            mins = {25}
            secs = {0}> </Timer>
        <Text style={styles.timerText}> {getTimerString(mins, secs)} </Text>
        <View
            style = {{
                width: '25%',
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            }}>
            <TouchableOpacity onPress={toggleTimer()}>
                <Image
                    source={{
                        width: 40, height: 40,
                        uri: getPlayPauseImage(isPlaying)}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={reset()}>
                    <Image
                    source={{
                        width: 40, height: 40,
                        uri: "https://github.com/bengant3/pomo/blob/main/assets/resetbutton.png?raw=true"}} />
            </TouchableOpacity>
        </View>
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
        fontSize: 90
    },
    goldenrod: {
        backgroundColor: "#daa520"
    }
});

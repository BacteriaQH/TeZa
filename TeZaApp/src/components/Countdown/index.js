import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Countdown({ handleSetIsEstimated }) {
    const [timer, setTimer] = useState(120);
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimer => {
                if (lastTimer <= 1) {
                    clearInterval(interval);
                }
                return lastTimer - 1;
            })
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (timer === 0) {
            handleSetIsEstimated(true);
        }
    }, [timer])
    return (
        <View>
            <Text style={styles.text}>Resend otp after: {timer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#007bff',
        padding: 20,
        margin: 20
    }
})
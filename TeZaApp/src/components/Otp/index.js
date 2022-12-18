import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const OtpConatiner = ({ children }) => {
    return (
        <View style={styles.otpContainer}>
            {children}
        </View>
    )
}
const SplitBoxes = ({ children }) => {
    return (
        <View style={styles.splitBoxes}>{children}</View>
    )
}
const SplitBoxesFocused = ({ children }) => {
    return (
        <View style={[styles.splitBoxes, styles.splitBoxesFocused]}>{children}</View>
    )
}
const SplitBoxText = ({ children }) => {
    return (
        <Text style={styles.splitBoxText}>{children}</Text>
    )
}

export default function OtpBox({ code, setCode, setIsFullCode, length }) {
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
    const boxArr = new Array(length).fill(0);

    const inputRef = useRef();

    useEffect(() => {
        // update pin ready status
        setIsFullCode(code.length === length);
        // clean up function
        return () => {
            setIsFullCode(false);
        };
    }, [code]);
    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
    };

    const BoxDigit = (_, index) => {
        const digit = code[index] || "";
        const isCurrentValue = index === code.length;
        const isLastValue = index === length - 1;
        const isCodeComplete = code.length === length;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
        const StyledSplitBoxes =
            isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
        return (
            <StyledSplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBoxes>
        )
    }
    return (
        <View style={styles.container}>
            <OtpConatiner>
                <Pressable style={styles.splitOTPBoxesContainer} >
                    {boxArr.map(BoxDigit)}
                </Pressable>
                <TextInput
                    value={code}
                    onChangeText={setCode}
                    maxLength={length}
                    ref={inputRef}
                    onBlur={handleOnBlur}
                    style={styles.textInputHidden}
                    keyboardType="number-pad"
                />
            </OtpConatiner>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    otpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputHidden: {
        width: 300,
        padding: 15,
        position: 'absolute',
        opacity: 0,
    },
    splitOTPBoxesContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    splitBoxes: {
        borderColor: '#007bff',
        borderWidth: 2,
        borderRadius: 5,
        padding: 12,
        margin: 5,
        minWidth: 50,
    },
    splitBoxesFocused: {
        borderColor: '#ecdbba',
        backgroundColor: 'grey'
    },
    splitBoxText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    }
})


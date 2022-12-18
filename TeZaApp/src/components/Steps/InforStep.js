import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableWithoutFeedback, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';

import Button from '../Button';
import axios from 'axios';
import SERVER_URL from './../../constant/sever';
import axiosInstance from '../../helpers/axiosInstance';

export default function InforStep({ page, setPage, isLast, name, email }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);
    const [keyboardShow, setKeyboardShow] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');
    const [address, setAddress] = useState('')
    const [notify, setNotify] = useState({
        err: false,
        success: false,
        message: '',
    });
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    /**
     * function to upload image
     */
    const uploadImage = async (blob) => {
        const fileName = blob.data.name;
        const fileType = blob.data.type;
        axiosInstance.get(`/api/file/upload`, {
            params: {
                fileName,
                fileType,
            }
        }).then((res) => {
            if (res.data.code === 200) {
                fetch(res.data.data.signedRequest, {
                    method: 'PUT',
                    body: blob,
                })
                    .then(data => {
                        ToastAndroid.show('Image upload successfully!', ToastAndroid.SHORT);
                        setImage(res.data.data.url);
                    })
            }
        })
    }
    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
        if (!result.canceled) {
            const responseFile = await fetch(result.assets[0].uri);
            const blob = await responseFile.blob();
            uploadImage(blob);
        }
    };

    const handleShowPass = () => {
        setIsShowPass(!isShowPass);
    }
    /**
     * useEffect to handle keyboard show and hide
     */
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardShow(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardShow(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    const onVerifyPassword = () => {
        if (password !== '' && passwordRetype !== '' && password !== passwordRetype) {
            setNotify({
                err: true,
                success: false,
                message: 'Mật khẩu không khớp',
            });
        } else if (password !== '' && passwordRetype !== '') {
            setNotify({
                err: false,
                success: true,
                message: 'Mật khẩu khớp',
            });
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ height: 60 }}>
                <Pressable onPress={() => setShow(true)} style={styles.inputContainer}>
                    <Text style={styles.label}>Birtday</Text>
                    {date && <Text style={{ paddingVertical: 10, fontWeight: '400', fontSize: 17 }} >{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text>}
                </Pressable>
            </View>
            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )
            }
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                }}
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <TextInput placeholder='Password' value={password} style={styles.input} secureTextEntry={isShowPass} onBlur={onVerifyPassword} onChangeText={setPassword} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Retype Password</Text>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <TextInput placeholder='Retype Password' value={passwordRetype} style={styles.input} secureTextEntry={isShowPass} onBlur={onVerifyPassword} onChangeText={setPasswordRetype} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={[keyboardShow ? { paddingTop: 120 } : { paddingTop: 30 }, styles.inputContainer]}>
                <Text style={styles.label} onPress={handleShowPass}>Show Password
                    {
                        isShowPass ? <MaterialIcons name="cancel" size={24} color="red" /> : <MaterialIcons name="check-circle" size={24} color="green" />
                    }
                </Text>
            </View>
            <View style={[{ height: 40 }, styles.inputContainer]}>
                <Text style={styles.label} onPress={handlePickImage}>Choose image <EvilIcons name="image" size={24} color="black" /></Text>
                {image && <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Address</Text>
                <TextInput placeholder='Address' style={styles.input} onChangeText={setAddress} value={address} />
            </View>
            {notify.err
                ?
                <Text style={{ color: 'red', fontSize: 16, fontWeight: '500' }}>{notify.message}</Text>
                :
                <Text style={{ color: 'green', fontSize: 16, fontWeight: '500' }}>{notify.message}</Text>
            }
            <View style={styles.buttonContainer}>
                <Button onPress={() => setPage(page - 1)} title='Prev' disable={page === 0} />
                <Button onPress={() => setPage(page + 1)} title='Next' disable={isLast} />
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    label: {
        paddingVertical: 10,
        width: '50%',
        height: 50,
        paddingRight: 10,
        fontWeight: '400',
        fontSize: 17
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 30,
    },
    input: {
        width: '50%',
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#007bff',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
})
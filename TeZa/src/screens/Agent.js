import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import { EMAIL, SERVER_URL } from '../constants/app';

const Agent = ({ route }) => {
    const { browser, os, sID } = route.params;
    const navigation = useNavigation();
    const handleLogin = () => {
        axios
            .post(`${SERVER_URL}/api/login/qrcode`, { sID, email: EMAIL })
            .then((res) => {
                if (res.data.code === 200) {
                    navigation.navigate('Home');
                }
            })
            .catch((err) => {
                alert(err);
            });
    };
    return (
        <View>
            <Text>
                Bạn đang đăng nhập từ {os.name}
                {os.version} trên trình duyệt {browser.name} phiên bản {browser.version}
            </Text>
            <Button title={'Nhấn để tiếp tục'} onPress={handleLogin}></Button>
        </View>
    );
};

export default Agent;

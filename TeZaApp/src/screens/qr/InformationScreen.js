import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SERVER_URL from '../../constant/sever.js';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function InformationScreen() {
  const route = useRoute();

  const [sID, setSID] = useState(route.params.data.sID);
  const [agent, setAgent] = useState(route.params.data.userAgent);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLoginOnAgent = async () => {
    setIsLoading(true);
    const userStr = await AsyncStorage.getItem('user');
    const user = JSON.parse(userStr);
    axios.post(`${SERVER_URL}/api/login/qr`, { email: user.email, sID })
      .catch(e => console.log(e))
      .then((res) => {
        if (res.data) {
          setIsLoading(false);
          ToastAndroid.show('Login on agent success', ToastAndroid.SHORT);
          navigation.navigate('Main');
        }
      });
  }
  return (
    <View style={styles.container}>
      <Text>Device: {agent.device.name + ' ' + agent.device.version}</Text>
      <Text>IP: {agent.ip}</Text>
      <Text>Near: {agent.location.city + ', ' + agent.location.country}</Text>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <Button onPress={handleLoginOnAgent} title={'Accept to login on agent'} disable={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
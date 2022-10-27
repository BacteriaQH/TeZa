import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button title="Scan" onPress={() => navigation.navigate('Scanner')} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

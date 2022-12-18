import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../components/Button';
import loginUser from '../../context/actions/loginUser';
import { GlobalContext } from '../../context/Provider';


export default function PasswordLoginScreen() {
    const [password, setPassword] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);
    const [mail, setMail] = useState('');
    const handleShowPass = () => {
        setIsShowPass(!isShowPass);
    }
    const { authDispatch, authState: { err, loading } } = useContext(GlobalContext);

    const onPress = () => {
        loginUser(1, mail, password)(authDispatch)
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>User Name</Text>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <TextInput placeholder='User Name'
                        value={mail}
                        style={styles.input}
                        onChangeText={setMail} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <TextInput placeholder='Password'
                        value={password}
                        style={styles.input}
                        secureTextEntry={isShowPass}
                        onChangeText={setPassword} />
                </TouchableWithoutFeedback>
                <Text onPress={handleShowPass} style={styles.showPass}>{isShowPass ? 'Hide' : 'Show'} </Text>
            </View>

            <Button
                title={loading ? 'Loading' : 'Log in'}
                onPress={onPress}
                disable={mail === '' || password === ''} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center',
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
        marginBottom: 20,
        marginRight: 0
    },
    input: {
        width: '40%',
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#007bff',
        borderWidth: 2,
        borderRadius: 5,
    },
    showPass: {
        alignItems: 'baseline'
    }
})
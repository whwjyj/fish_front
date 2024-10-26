import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  const handleLoginPress = async () => {
    if (email === '' || password === '') {
      Alert.alert('실패', '아이디 또는 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://172.30.1.6:5000/login', {
        input_id: email,
        input_password: password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);

        // access_token을 AsyncStorage에 저장
        await AsyncStorage.setItem('access_token', response.data.access_token);


        navigation.navigate('Main');
      } else {
        Alert.alert('Login Failed', response.data.message || '아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', error.response?.data?.message || '아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          autoFocus={true}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={handlePasswordChange}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={handleLoginPress}
          buttonStyle={styles.loginButton}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>회원가입</Text>
          <View style={styles.dividerLine} />
        </View>

        <Button
          title="회원가입"
          onPress={handleSignUpPress}
          buttonStyle={styles.signUpButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    width: '80%',
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#B2CCFF',
    borderRadius: 5,
  },
  signUpButton: {
    backgroundColor: '#B2CCFF',
    borderRadius: 5,
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
});


export default Login;

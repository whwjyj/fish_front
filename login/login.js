import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  const handleLoginPress = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Main');
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

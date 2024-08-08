import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LoginMain = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !username || !password || !confirmPassword) {
      Alert.alert('필수 입력 오류', '모든 필수 입력 칸을 채워주세요.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('비밀번호 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    console.log('회원가입 정보:', {
      name,
      username,
      password,
      confirmPassword,
    });
    navigation.navigate('Login'); // 로그인 페이지로 이동
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>회원가입</Text>

      <Text style={styles.label}>이름*</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={setName}
        placeholder="실명 입력"
      />

      <Text style={styles.label}>아이디*</Text>
      <TextInput
        value={username}
        style={styles.input}
        onChangeText={setUsername}
        placeholder="아이디"
      />

      <Text style={styles.label}>비밀번호*</Text>
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        placeholder="PW"
        secureTextEntry
      />

      <Text style={styles.label}>비밀번호 확인*</Text>
      <TextInput
        value={confirmPassword}
        style={styles.input}
        onChangeText={setConfirmPassword}
        placeholder="PW"
        secureTextEntry
      />

      <Button
        title="완료"
        buttonStyle={styles.confirmButton}
        onPress={handleSignUp}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default LoginMain;

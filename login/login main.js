import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // 아이콘 임포트

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

    // 회원가입 정보를 백엔드로 전송
    axios.post('http://172.30.1.6:5000/join/information', {
      input_id: username,
      input_name: name,
      input_password: password,
      input_password_check: confirmPassword,
    })
    .then(response => {
      if (response.data.message === "success") {
        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        navigation.navigate('Login');
      } else {
        Alert.alert('오류', response.data.message);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 409) {
        Alert.alert('아이디 중복 오류', '이미 사용 중인 아이디입니다. 다른 아이디를 사용해 주세요.');
      } else {
        console.error('Error:', error);
        Alert.alert('서버 오류', '회원가입 중 문제가 발생했습니다.');
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

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
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40, // 뒤로 가기 버튼 아래에 공간 추가
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

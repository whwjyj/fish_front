import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const DeleteAccount = () => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleDelete = async () => {
    if (!password) {
      Alert.alert('오류', '비밀번호를 입력해주세요.');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('access_token'); // 토큰 가져오기

      if (!token) {
        Alert.alert('오류', '인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await axios.post('http://172.30.1.6:5000/unregister', {
        input_pw: password,
        input_pw_re: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // 인증 토큰을 헤더에 추가 (사용)
        },
      });

      if (response.status === 200) {
        Alert.alert('성공', '회원 탈퇴가 완료되었습니다.');
        navigation.navigate('Login');
      } else {
        Alert.alert('오류', response.data.message || '회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>회원 탈퇴</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>회원 탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 40, // 뒤로 가기 버튼 아래에 공간 추가
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: '#FF6F6F',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DeleteAccount;

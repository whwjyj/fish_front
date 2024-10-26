import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Camera = () => {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('access_token');
      if (storedToken) {
        setToken(storedToken);
      } else {
        Alert.alert('오류', '인증 정보가 없습니다. 다시 로그인해주세요.');
        navigation.navigate('Login');
      }
    };

    fetchToken();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && token) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      const formData = new FormData();
      formData.append('file', {
        uri: data.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      try {
        const response = await axios.post('http://172.30.1.6:5000/take_pic', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });

        navigation.navigate('Result', { serverResponse: response.data }); // 결과 페이지로 이동
      } catch (error) {
        console.error('Error uploading the file:', error);
      }
    } else {
      Alert.alert('오류', '카메라 또는 인증 토큰이 없습니다.');
    }
  };

  const goBack = () => {
    navigation.goBack(); // 뒤로가기 기능
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.auto}
      >
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.cameraControls}>
          <TouchableOpacity style={styles.circleButton} onPress={takePicture}>
            <Text style={styles.buttonText}>사진 찍기</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  cameraControls: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Camera;

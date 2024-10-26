import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // axios 임포트 추가

const Result = ({ route }) => {
  const navigation = useNavigation();
  const { serverResponse } = route.params;

  const goCamera = () => {
    navigation.navigate('Camera'); // 카메라 화면으로 이동
  };

  const goHome = () => {
    navigation.navigate('Main'); // 홈 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>물고기의 종류</Text>
      {serverResponse?.list ? (
        <Text style={styles.resultText}>종류: {serverResponse.list.join(', ')}</Text>
      ) : (
        <Text style={styles.resultText}>종류 정보를 불러올 수 없습니다.</Text>
      )}

      {serverResponse?.image && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${serverResponse.image}` }}
          style={styles.resultImage}
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goCamera}>
          <Text style={styles.buttonText}>카메라</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goHome}>
          <Text style={styles.buttonText}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    color: 'black',
  },
  resultImage: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Result;

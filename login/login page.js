import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setTermsChecked(newValue);
    setPrivacyChecked(newValue);
  };

  const handleConfirmPress = () => {
    if (termsChecked && privacyChecked) {
      navigation.navigate('LoginMain');
    } else {
      setErrorMessage('필수 항목을 체크해주세요');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>서비스 이용 동의</Text>
      <ScrollView>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={allChecked}
            onValueChange={handleAllChecked}
          />
          <Text style={styles.checkboxLabel}>약관 전체 동의</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={termsChecked}
            onValueChange={() => setTermsChecked(!termsChecked)}
          />
          <Text style={styles.checkboxLabel}>(필수)서비스 이용약관</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={privacyChecked}
            onValueChange={() => setPrivacyChecked(!privacyChecked)}
          />
          <Text style={styles.checkboxLabel}>(필수)개인 정보 처리 방침</Text>
        </View>
      </ScrollView>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginPage;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Mypage = () => {
  const navigation = useNavigation();

  const handlePrivacyPolicy = () => {
    Alert.alert(
      '개인정보처리방침',
      `
1. 수집하는 정보
- 개인 식별 정보: 사용자 이름 등.
- 기기 정보: 기기 유형, 운영 체제, 앱 사용 기록 등.
- 파일 접근: 앱이 생성하거나 사용자가 업로드한 사진, 비디오 등 파일.

2. 정보 수집 방법
- 사용자가 제공하는 정보: 사용자가 앱 사용 시 자발적으로 입력한 정보.
- 자동으로 수집되는 정보: 앱 사용 중 자동으로 수집되는 데이터 (기기 정보, 로그 데이터 등).
- 제3자 서비스 이용: 광고, 분석 도구 등 제3자 서비스를 통해 수집되는 데이터.

3. 정보 사용 목적
- 서비스 제공 및 유지: 사용자가 요청한 서비스를 제공하기 위해.
- 사용자 지원: 사용자 문의에 답변하고, 앱 사용을 지원하기 위해.
- 개인화: 사용자 경험을 맞춤화하고, 사용자 선호에 따라 콘텐츠를 제공하기 위해.
- 보안 및 사기 방지: 사용자 및 서비스의 보안을 유지하고, 사기성 활동을 방지하기 위해.

4. 정보 공유 및 공개
- 제3자 서비스 제공자: 앱 운영, 서비스 제공, 사용 분석, 광고 제공을 위해 신뢰할 수 있는 제3자와 정보를 공유할 수 있습니다.
- 법적 요구: 법적으로 요구될 때, 또는 사용자, 당사, 또는 타인의 권리를 보호하기 위해 정보를 공개할 수 있습니다.

5. 데이터 보안
- 당사는 사용자의 데이터를 보호하기 위해 상업적으로 합리적인 보안 조치를 취하고 있습니다. 그러나 인터넷을 통한 데이터 전송 또는 전자 저장 방법은 100% 안전하지 않으므로 절대적인 보안을 보장할 수는 없습니다.

6. 데이터 보유
- 수집된 정보는 서비스 제공을 위해 필요한 기간 동안 또는 법적 의무를 준수하기 위해 필요한 기간 동안 보유됩니다.

7. 사용자의 권리
- 사용자는 자신의 개인 정보를 검토, 수정 또는 삭제할 수 있습니다. 이러한 요청은 당사에 연락하여 수행할 수 있습니다.

8. 개인정보처리방침의 변경
- 당사는 필요에 따라 이 개인정보처리방침을 변경할 수 있습니다. 변경 사항은 이 페이지에 게시됩니다.

**개발자 정보 및 문의**

- 이 앱의 개인정보처리방침은 개발자 조용주에 의해 관리됩니다.
- 개인정보처리방침에 대한 질문이 있으시면 아래 이메일로 문의해 주십시오:
    - 이메일: [whwjyj00@nvaer.com]
    - 개발자: 조용주
    - 연락처: [010-4164-6157]
      `,
      [{ text: '확인', onPress: () => console.log('확인') }],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>마이페이지</Text>
      </View>

      <View style={styles.profileSection}>
        <Icon name="person-circle" size={80} color="#888" />
        <Text style={styles.profileName}>이름</Text>
      </View>

      <TouchableOpacity style={styles.photoButton} onPress={() => navigation.navigate('Picture')}>
        <Text style={styles.photoButtonText}>내가 찍은 사진</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => navigation.navigate('DeleteAccount')}
      >
        <Text style={styles.deleteButtonText}>회원 탈퇴</Text>
      </TouchableOpacity>

      {/* 개인정보처리방침 버튼 추가 */}
      <TouchableOpacity
        style={styles.privacyButton}
        onPress={handlePrivacyPolicy}
      >
        <Text style={styles.privacyButtonText}>개인정보처리방침</Text>
      </TouchableOpacity>

      <View style={styles.bar}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Main')}>
          <Icon name="fish" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.barButton} onPress={() => navigation.navigate('Main')}>
          <Icon name="home" size={30} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Mypage')}>
          <Icon name="person" size={30} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
  },
  photoButton: {
    backgroundColor: '#B2CCFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#B2CCFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  // 개인정보처리방침 버튼 스타일 추가
  privacyButton: {
    backgroundColor: '#B2CCFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  privacyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
  },
  barButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mypage;

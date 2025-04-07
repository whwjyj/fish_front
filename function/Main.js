import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const [searchText, setSearchText] = useState(''); // 검색창 상태관리
    const navigation = useNavigation();

    const searchCheck = () => {
        console.log('검색어:', searchText);
    };

    const CameraPress = () => {
        navigation.navigate('Camera');
    };

    const MyPage = () => {
        navigation.navigate('Mypage');
    };

    return (
        <View style={styles.container}> // 컨테이너
            <Text style={styles.header}>회탐정</Text>
            <View style={styles.searchContainer}>
                <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="회 종류를 입력하세요"
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    onSubmitEditing={searchCheck}
                />
            </View>
            <TouchableOpacity style={styles.camera} onPress={CameraPress}>
                <Icon name="camera" size={200} color="#888" />
            </TouchableOpacity>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.footerButton} onPress={() => console.log('물고기 눌림')}>
                    <Icon name="fish" size={30} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.barButton} onPress={() => console.log('홈 눌림')}>
                    <Icon name="home" size={30} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={MyPage}>
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
        backgroundColor: 'white',
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
        marginBottom: 80,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
    },
    camera: {
        width: 200,
        height: 200,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
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

export default Main;

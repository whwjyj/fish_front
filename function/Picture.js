import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Alert, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Picture = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const navigation = useNavigation(); // navigation 객체 사용

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('access_token');
            if (!token) {
                Alert.alert('오류', '토큰을 가져올 수 없습니다. 다시 로그인해주세요.');
                return;
            }

            const response = await axios.post('http://172.30.1.6:5000/get_result', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            Alert.alert('오류', '이미지를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const toggleDeleteMode = () => {
        setIsDeleteMode(!isDeleteMode);
        setSelectedImages([]); // 삭제 모드 변경 시 선택된 이미지 초기화
    };

    const handleImagePress = (index) => {
        if (isDeleteMode) {
            if (selectedImages.includes(index)) {
                setSelectedImages(selectedImages.filter((i) => i !== index));
            } else {
                setSelectedImages([...selectedImages, index]);
            }
        }
    };

    const deleteSelectedImages = async () => {
        Alert.alert(
            '삭제 확인',
            '선택한 이미지를 삭제하시겠습니까?',
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '삭제',
                    onPress: async () => {
                        try {
                            const token = await AsyncStorage.getItem('access_token');
                            if (!token) {
                                Alert.alert('오류', '토큰을 가져올 수 없습니다. 다시 로그인해주세요.');
                                return;
                            }

                            const response = await axios.post('http://192.0.0.2:5000/delete_images', {
                                indices: selectedImages, // 선택된 이미지들 인덱스 전달
                            }, {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                },
                            });

                            if (response.status === 200) {
                                setImages((prevImages) =>
                                    prevImages.filter((_, i) => !selectedImages.includes(i))
                                );
                                setIsDeleteMode(false);
                                setSelectedImages([]);
                            } else {
                                Alert.alert('오류', '이미지를 삭제할 수 없습니다.');
                            }
                        } catch (error) {
                            console.error('Error deleting images:', error);
                            Alert.alert('오류', '이미지를 삭제하는 중 오류가 발생했습니다.');
                        }
                    },
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <Button
                    title={isDeleteMode ? "삭제 취소" : "삭제"}
                    onPress={toggleDeleteMode}
                />
                {isDeleteMode && selectedImages.length > 0 && (
                    <Button
                        title="삭제"
                        onPress={deleteSelectedImages}
                        color="red"
                    />
                )}
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : images.length > 0 ? (
                    images.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleImagePress(index)}
                            style={[
                                styles.imageContainer,
                                isDeleteMode && selectedImages.includes(index) && styles.selectedImage
                            ]}
                        >
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${image}` }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.noImagesText}>사진이 없습니다</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        marginRight: 10,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    imageContainer: {
        marginBottom: 16,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },
    selectedImage: {
        borderWidth: 3,
        borderColor: 'red',
    },
    noImagesText: {
        fontSize: 18,
        color: '#888',
    },
});

export default Picture;


import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const Camera = () => {
  const cameraRef = useRef(null);
  const [imageUri, setImageUri] = useState(null);
  const [showCamera, setShowCamera] = useState(true);
  const [serverResponse, setServerResponse] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('Picture taken:', data.uri);
      setImageUri(data.uri);
      setShowCamera(false);

      const formData = new FormData();
      formData.append('file', {
        uri: data.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      try {
        const response = await axios.post('http://172.30.1.100:5000/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Server response:', response.data);
        setServerResponse(response.data);
      } catch (error) {
        console.error('Error uploading the file:', error);
      }
    }
  };

  const retakePicture = () => {
    setImageUri(null);
    setShowCamera(true);
    setServerResponse(null);
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.auto}
        >
          <View style={styles.cameraControls}>
            <Button title="Take Picture" onPress={takePicture} />
          </View>
        </RNCamera>
      ) : (
        <View style={styles.imageContainer}>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
          {serverResponse && (
            <View>
              <Text>Server Response:</Text>
              <Text>{JSON.stringify(serverResponse, null, 2)}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.retakeButton} onPress={retakePicture}>
            <Button title="Retake Picture" onPress={retakePicture} />
          </TouchableOpacity>
        </View>
      )}
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
  cameraControls: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  retakeButton: {
    marginTop: 20,
  },
});

export default Camera;


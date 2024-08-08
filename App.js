import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login/login';
import LoginMain from './login/login main';
import LoginPage from './login/login page';
import Main from './function/Main';
import Camera from './function/Camera';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="LoginMain" component={LoginMain} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

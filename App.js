import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login/login';
import LoginMain from './login/login main';
import LoginPage from './login/login page';
import Main from './function/Main';
import Camera from './function/Camera';
import Mypage from './function/Mypage';
import DeleteAccount from './function/DeleteAccount';
import Picture from './function/Picture';
import Result from './function/Result'

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginMain" component={LoginMain} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }}/>
          <Stack.Screen name="Mypage" component={Mypage} options={{ headerShown: false }}/>
          <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{ headerShown: false }}/>
          <Stack.Screen name="Result" component={Result} options={{ headerShown: false }}/>
          <Stack.Screen name="Picture" component={Picture} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

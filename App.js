import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as pages from './src'

const Stack = createStackNavigator();
//이것도 네비게이터로 따로 다른 파일 쓰는게 좋다고는 하는데 이유는 잘 모르겠,,,
function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={pages.Login} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={pages.SignUp} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={pages.Home} options={{headerShown:false}}/>
                <Stack.Screen name="Control" component={pages.Control}/>
                <Stack.Screen name="Exercise" component={pages.Exercise}/>
                <Stack.Screen name="Meal" component={pages.Meal}/>
                <Stack.Screen name="Cleaning" component={pages.Cleaning}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
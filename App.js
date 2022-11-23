import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as pages from './src'

const Stack = createStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={pages.Login} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={pages.Home} options={{headerShown:false}}/>
                <Stack.Screen name="Detail" component={pages.Detail} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
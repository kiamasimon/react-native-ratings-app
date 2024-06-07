import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import Header from '../shared/Header';
import React from 'react';


export default function AboutStack(){
  const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            // headerTitle: () => <Header/>,
        }}>
          <Stack.Screen name="About Page" component={About} 
          options={({navigation})=>{
            return {
              headerTitle: () => <Header navigation={navigation} title="About GameZone"/>
            }
          }}/>
        </Stack.Navigator>
    );
}
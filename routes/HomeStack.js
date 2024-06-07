import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';
import React from 'react';


export default function HomeStack(){
  const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          // headerTitle: () => <Header/>,
        }}>
          <Stack.Screen name="Home Page" component={Home} 
            options={({navigation})=>{
              return {
                headerTitle: () => <Header navigation={navigation} title="GameZone"/>
              }
            }}
           />
          <Stack.Screen name="Details Page" component={ReviewDetails}/>
        </Stack.Navigator>
    );
}
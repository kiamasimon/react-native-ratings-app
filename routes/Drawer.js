import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


export default function Drawer(){
    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"screenOptions={{
                // title:'GameZone', 
                headerTintColor: '#444',
                headerStyle: {
                    backgroundColor: '#eee', 
                    height: 60
                }
            }}>
        
                <Drawer.Screen name="Home" options={{headerShown: false}} component={HomeStack} />
                <Drawer.Screen name="About" options={{headerShown: false}} component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
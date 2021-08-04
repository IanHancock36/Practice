import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NewView from './Components/NewView';
// import FlatListView from './Components/FlatListView';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Child />
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();


const App = () =>{
  return(
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName ="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
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
const Stack = createNativeStackNavigator();


export default function App() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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

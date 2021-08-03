import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NewView from './Components/NewView';
// import FlatListView from './Components/FlatListView';



export default function App() {
  const [people, setPeople] = useState([
    {name: 'Ian' , age: 36 , id: '1' },
    {name: 'Steve' , age: 86 , id: '2' },
    {name: 'Joe' , age: 46 , id: '3' },
    {name: 'Randy' , age: 191 , id: '4' },
    {name: 'Carl' , age: 67 , id: '5' },
    {name: 'Jeff' , age: 22 , id: '6' }
  ])

  return (
    <View style={styles.container}>
     <View>
      <Text>Header</Text>
      </View>
  <StatusBar style="auto" />
    <View>

    </View>

    </View>
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

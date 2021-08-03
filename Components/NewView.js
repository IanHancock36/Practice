// import React,{useState} from 'react';
// import { StyleSheet, Text, View ,FlatList } from 'react-native';

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => console.log(json))

// const [people, setPeople] = useState([
//   {name: 'Ian' , age: 36 , id: '1' },
//   {name: 'Steve' , age: 86 , id: '2' },
//   {name: 'Joe' , age: 46 , id: '3' },
//   {name: 'Randy' , age: 191 , id: '4' },
//   {name: 'Carl' , age: 67 , id: '5' },
//   {name: 'Jeff' , age: 22 , id: '6' }


// export default function  NewView () {
// return(
//     <View>
//       <FlatList 
//     keyExtractor={(item) => item.id }
//     data={people}
//     renderItem={ ({item}) => (
//       <Text style={{marginBottom:50}}>{item.name}</Text>
//       />
//     </View>
// );



// }
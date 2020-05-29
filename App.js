import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
const [items, setItems] = useState([
  {id: uuidv4(), text: 'Milk'},
  {id: uuidv4(), text: 'Eggs'},
  {id: uuidv4(), text: 'Bread'},
  {id: uuidv4(), text: 'Butter'},
]);

  return (
<View style={styles.container}>
<Header title='Shopping List' />
<FlatList data={items} renderItem={({item}) => <ListItem item={item}/>}/>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  },
})

export default App;
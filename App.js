import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  const [items, setItems] = useState([
    {id: uuidv4(), text: "First Item"}
  ]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("KEY", JSON.stringify(items))
    } catch (e) {
      Alert.alert('Failed to save the data to the storage.')
    }
  }

  const readData = async () => {
    try {
      const userData = await AsyncStorage.getItem("KEY")
      if (userData !== null) {
      setItems(JSON.parse(userData));
      }
    } catch (e) {
      Alert.alert('Failed to fetch the data from storage.')
    }
  }

  useEffect(() => {
    readData()
  }, [])

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("KEY");
    } catch (error) {
      Alert.alert('Failed to delete data from storage.')
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
    saveData();
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item.', [{ text: 'OK' }]);
    } else {
      setItems(prevItems => { return [{ id: uuidv4(), text }, ...prevItems]; })
      saveData();
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
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
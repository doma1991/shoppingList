import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {

const [buttonColour, updateButtonColour] = useState('white');

  return (
<TouchableOpacity style={styles.listItem}>
<View style={styles.listItemView}>
<Text style={styles.listItemText}>{item.text}</Text>
<Icon name="check-square" size={20} 
style={{flex: 3, color: buttonColour}}
onPress={() => buttonColour == "white" ? updateButtonColour("green") : updateButtonColour("white")} 
/>
<Icon name="remove" size={20} color="firebrick" style={styles.removeView} onPress={() => deleteItem(item.id)}/>
</View>
</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
listItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee'
},
listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
listItemText: {
    fontSize: 18,
    flex: 10
},
removeView: {
    flex: 1,
}
});

export default ListItem;
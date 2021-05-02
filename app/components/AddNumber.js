import React from 'react';
import { Text, View, StyleSheet, Image,TextInput } from 'react-native';

const AddNumber = (props) => {
    return (
    <View>
        <Text>Número</Text>
        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Número"
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
    )
}

export default AddNumber;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });
  

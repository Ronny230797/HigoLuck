import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {addNumber,removeNumber} from '../store/Actions';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    image: {
        width: 100,
        height: 100,
    },
});

const SelectedNumbers = (props) => {
    const data = useSelector(state => state.listOfNumbers)
    const dispatch = useDispatch();
    let number = {
        number: 22,
        amount: 987,
        dayNight: 'Night'
    };
    return (
        <View style={styles.background}>
            <Button title='Add' onPress={() => dispatch(addNumber(number))} />
            {
                data.map(element =>
                    <View style={styles.container} key={element.number}>
                        <Text>Número {element.number}</Text>
                        <Text>Hora {element.dayNight}</Text>
                        <Text>Cantidad {element.amount}</Text>
                    </View>
                )
            }
        </View>
    )
}


export default SelectedNumbers;
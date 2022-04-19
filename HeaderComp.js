
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,Touchableopacity } from 'react-native';

export const HeaderComp=({
    goBack,
    text
    
}) =>{

    const navigation = useNavigation();
    return (
        <View style={{ flexDirection:"row", justifyContent:"space-between",height:42}}>
            <Touchableopacity
            onPress={!!goBack ? goBack : ()=>navigation.goBack()}>
            <Text>GoBack</Text>
            </Touchableopacity>
            <Text>{text}</Text>
            
        </View>
    )

}

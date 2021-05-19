import React from 'react'
import {View,TextInput, Text} from 'react-native'
import {GeneralStyle} from '../../styles/GeneralStyle' 
import {Colors} from '../../styles/Colors'

export const InputField = ({setValue, title}) =>{
    return(
    <View style={GeneralStyle.center_container}>
        <Text style={GeneralStyle.title}>{ title }</Text>
        <View style={GeneralStyle.field_multiple}>
            <TextInput onChangeText={setValue} style={GeneralStyle.field_text}></TextInput>
        </View>
    </View>
    )
    
} 


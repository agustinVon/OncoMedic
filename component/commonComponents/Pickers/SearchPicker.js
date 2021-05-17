import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import {StyleSheet, Text} from 'react-native'
import { View,TextInput } from 'react-native'

export const SearchPicker = ({items,setItems, defaultValue, setValue, placeHolder,open,setOpen}) => {



    return(
        <DropDownPicker
            zIndex={10000}
            open={open}
            setOpen={setOpen}
            setItems={setItems}
            items={items}
            value={defaultValue}
            setValue={setValue}
            style={defaultValue!=null? CustomPickerStyle.picked : CustomPickerStyle.not_picked}
            itemStyle={{justifyContent: 'flex-start'}}
            containerStyle={CustomPickerStyle.container_style}
            dropDownStyle={{backgroundColor: 'white', zIndex:1000}}
            placeholder={placeHolder}
            placeholderStyle={defaultValue==null? CustomPickerStyle.place_holder_style_not_picked : CustomPickerStyle.place_holder_style_picked}
            searchable={true}
            searchPlaceholder={'Busque su sintoma...'}
            searchablePlaceholderTextColor='#AAAAAA'
            searchableError={()=><Text>No se encontró el síntoma que esta buscando</Text>}
        >
        </DropDownPicker>
    )
}

const CustomPickerStyle= StyleSheet.create({

    place_holder_style_picked:{
        color:'black',
        fontSize:17,
    },

    place_holder_style_not_picked:{
        color:'#AAAAAA',fontSize:17
    },

    container_style:{
        width:'80%',
        height:50,
    },

    not_picked:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: '#fafafa'
    },

    picked:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: "#E3E3E3"
    }

})

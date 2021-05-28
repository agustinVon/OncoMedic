import React,{useState,useEffect} from 'react'
import {StyleSheet, Text} from 'react-native'
import { Pressable } from 'react-native'
import { ScrollView } from 'react-native'
import { View,TextInput } from 'react-native'
import {GeneralStyle} from '../../styles/GeneralStyle'
import {IncorrectField} from '../Fields/IncorrectField'

export const SearchPicker = ({symptoms, setValue, placeHolder, message , open , setOpen}) => {

    const [searchText,setSearch] = useState('')
    const [listOfPossibleSymptoms,setList] = useState(symptoms)
    const [notFound,setNotFound] = useState(false)

    useEffect(()=>{
        const lowerSearch = searchText.toLocaleLowerCase()
        if(searchText !== ''){
            const auxListOfSymptoms = []
            symptoms.forEach((symptom)=>{
                const label = symptom.label.toLowerCase()
                const desc = symptom.description.toLowerCase()
                if(label.includes(lowerSearch) || desc.includes(lowerSearch)){
                    auxListOfSymptoms.push(symptom)
                }
            })
            setList(auxListOfSymptoms)
            if(listOfPossibleSymptoms == ''){
                setNotFound(true)
            }else{
                setNotFound(false)
                setOpen(true)
            }
        }
        else{
            setNotFound(false)
        }
    },[searchText])

    const setSymptom = async (symptom) => {
        await setSearch(symptom.label)
        setValue(symptom)
        setOpen(false)
    }

    return(
        <View>
            <IncorrectField fail={notFound} value={searchText} setValue={setSearch} 
                placeHolder={placeHolder} 
                message={message}
                ifOnFocus={()=>setOpen(true)}/>
            {open === true && notFound === false &&
            <View style={{marginTop:20 , height:180}}>
                <ScrollView style={GeneralStyle.symptom_list}>
                {listOfPossibleSymptoms.map((symptom)=>{
                    return(
                    <Pressable key={symptom.value} onPress={()=>setSymptom(symptom)} style={GeneralStyle.symptom_list_item}>
                        <Text style={GeneralStyle.symptom_list_font}>{symptom.label}</Text>
                    </Pressable>
                    )
                })}
                </ScrollView>
            </View>
            } 
        </View>
        
    )
}

const CustomPickerStyle= StyleSheet.create({

    place_holder_style_picked:{
        color:'black',
        fontSize:17,
        borderColor:'#E3E3E3'
    },

    place_holder_style_not_picked:{
        color:'#AAAAAA',fontSize:17,
        borderColor:'#E3E3E3'
    },

    container_style:{
        width:'80%',
        height:50,
    },

    not_picked:{
        borderWidth:0,
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: '#E3E3E3'
    },

    picked:{
        borderColor:'#fafafa',
        borderWidth:0,
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
        backgroundColor: "#fafafa"
    }

})

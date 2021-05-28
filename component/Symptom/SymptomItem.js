import React,{useState} from 'react'
import {Pressable, View, Text} from 'react-native'
import {GeneralStyle} from '../styles/GeneralStyle'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../styles/Colors'

export const SymptomItem = ({symptom,deleteSymptom,editSymptom,key}) =>{

    const [pressed, setPress] = useState(false)

    return(
        <View>
            {console.log(symptom)}
            {pressed?
            <Pressable style={GeneralStyle.symptom_item_pressed}
            onPress={()=>setPress(false)}>
                <View style={{flexDirection:'row',flex:1, width:'100%', justifyContent:'space-between',alignContent:'center'}}>
                    <Text style={GeneralStyle.symptom_item_text} > { symptom.symptom } </Text>
                    <Pressable style={GeneralStyle.symptom_item_logo} onPress={() => deleteSymptom()}>
                        <Icon name={'delete'} color={'black'} size={20}/>
                    </Pressable>
                </View>
                <View style={{flexDirection:'row' ,flex:1,marginTop:10 , width:'100%', justifyContent:'space-between',alignContent:'center'}}>
                    <Text style={GeneralStyle.symptom_item_miniText} > Grado {symptom.grade} </Text>
                    <Pressable style={GeneralStyle.symptom_item_logo} onPress={() => deleteSymptom()}>
                        <Icon name={'edit'} color={'black'} size={20}/>
                    </Pressable>
                </View>
            </Pressable>
            :
            <Pressable style={GeneralStyle.symptom_item_not_pressed}
            onPress={()=>setPress(true)}>
                <Text style={GeneralStyle.symptom_item_text} > { symptom.symptom } </Text>
                <Pressable style={GeneralStyle.symptom_item_logo} onPress={() => console.log('delete')}>
                        <Icon name={'delete'} color={'black'} size={20}/>
                    </Pressable>
            </Pressable>
            }
        </View>
    )
    
}
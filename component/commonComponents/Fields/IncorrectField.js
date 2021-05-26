import React from 'react'
import {View,Text,TextInput} from 'react-native'
import {GeneralStyle} from '../../styles/GeneralStyle'

export const IncorrectField = ({fail,setValue,value,placeHolder,keyboardType,message,ifOnFocus=null}) => {
    return(
        <View>
            <View style={!fail ? GeneralStyle.field_multiple : GeneralStyle.field_incorrect}>
                <TextInput onChangeText={setValue} 
                    value={value}
                    keyboardType={keyboardType} placeholderTextColor="#c4c4c4" 
                    placeholder= {placeHolder}
                    style={ GeneralStyle.field_text}
                    onFocus={()=>(ifOnFocus!==null ? ifOnFocus():null)}/>
            </View>
            {
                fail  && <Text style={{color: 'red'}}>{message}</Text>
            }
        </View>
        
    )
}
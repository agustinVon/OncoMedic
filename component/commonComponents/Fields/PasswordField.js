import React,{useState} from 'react'
import {View,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {GeneralStyle} from '../../styles/GeneralStyle'
import {Colors} from '../../styles/Colors'

export const PasswordField = ({setPassword}) =>{
    const [passwordIsHidden,setPasswordHidden] = useState(true)

    return(
        <View style={GeneralStyle.field_multiple}>
            <TextInput secureTextEntry={passwordIsHidden} 
                    onChangeText={setPassword}
                    placeholderTextColor={Colors.textGrey} 
                    placeholder="Ingrese su contraseña" 
                    style={{...GeneralStyle.field_text , flex : 5}}/>
            <Icon.Button name={passwordIsHidden?'eye':'eyeo'}  
                    color={Colors.black} 
                    style={{flex : 1 , backgroundColor : Colors.inputFieldGrey}} 
                    onPress={()=>setPasswordHidden(!passwordIsHidden)}/>
        </View>
    )
}
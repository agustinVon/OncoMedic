import React,{useState, useEffect} from 'react'
import {View,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {GeneralStyle} from '../../styles/GeneralStyle'
import {Colors} from '../../styles/Colors'
import { Text } from 'react-native';

export const PasswordField = ({setValue,failToggle,incomplete}) =>{
    const [passwordIsHidden,setPasswordHidden] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(true)

    useEffect(() => {
        const pass_aux = password;   
        if(pass_aux.length >= 1 && failToggle === true){
            pass_aux.length < 8 ? setPasswordIsValid(false) : setPasswordIsValid(true)
        }
        else{
            setPasswordIsValid(true)
        }
        setValue(password)
    }, [password])

    return(
        <View>
            <View style={  !incomplete  ?  passwordIsValid?  GeneralStyle.field_multiple: GeneralStyle.field_incorrect: GeneralStyle.field_incorrect}>
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
            {(!passwordIsValid) && <Text style={{color: 'red'}}>{'Contraseña no valida'}</Text>}
            {(incomplete && <Text style={{color: 'red'}}>{'Campo incompleto'}</Text> )}
        </View>
        

    )
}
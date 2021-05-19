import React from 'react'
import {Text,Image,View} from 'react-native'
import {GeneralStyle} from '../styles/GeneralStyle'
import {RadioButton} from '../commonComponents/RadioButtons/RadioButton'

export const DailyRegisterOptional=({text,image,setValue})=>{
    return(
        <View style={ GeneralStyle.daily_background}>
            <View style={ GeneralStyle.daily_upper_view }>
                <Image source={ image }/>
                <Text style={ {...GeneralStyle.daily_text, marginTop:10} }>{text}</Text>
            </View>
            <Image style={GeneralStyle.daily_middle_deco} resizeMode={'stretch'} source={require('../../img/day_deco.png')}/>
            <View style={ GeneralStyle.daily_down_view }>
                <RadioButton manageValue={setValue}/>
            </View>
        </View>
    )
}
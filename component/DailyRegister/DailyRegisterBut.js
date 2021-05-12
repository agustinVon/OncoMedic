import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView,Text,Image,View,StyleSheet,Dimensions,ScrollView } from 'react-native'
import ItemDRButtons from '../Item/ItemDRButton'
import {GeneralStyle} from '../styles/GeneralStyle'

export const DailyRegisterBut = ({options, text, image, setValue}) => {
    return(
        <View style={GeneralStyle.daily_background}>
            <View style={GeneralStyle.daily_upper_view}>
                <Image source={ image }/>
                <Text style={{ ...GeneralStyle.daily_text, marginTop:10 }} >{ text }</Text>
            </View>
            <Image style={GeneralStyle.daily_middle_deco} resizeMode={'stretch'} source={require("../../img/day_deco.png")}/>
            <View style={ GeneralStyle.daily_down_view }>
                <ScrollView>
                    {options.map((item, index) => {return(<ItemDRButtons item={item} key={index} handlePress={setValue}/>)})}
                </ScrollView>
                
            </View>
        </View>
    )
}
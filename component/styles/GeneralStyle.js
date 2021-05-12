import {StyleSheet} from 'react-native'
import {Colors} from './Colors'

export const GeneralStyle = StyleSheet.create({
    daily_background:{
        width:'100%',
        height:"100%",
        backgroundColor: "white",
    },

    daily_upper_view:{
        backgroundColor: Colors.orange,
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },

    daily_down_view:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },

    daily_text:{
        maxWidth: 250,
        fontSize: 25,
        color:"white",
        fontWeight: 'bold',
        textAlign:"center",
    },

    daily_middle_deco:{
        width: '100%',
        height: 60
    }
});
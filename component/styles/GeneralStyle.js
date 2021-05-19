import {StyleSheet} from 'react-native'
import {Colors} from './Colors'
import {FontSizes} from './Fonts'

export const GeneralStyle = StyleSheet.create({

    white_background:{
        width:'100%',
        height:"100%",
        backgroundColor: "white",
    },

    slider_upper_view:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    daily_down_view:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },

    slider_text:{
        maxWidth: 250,
        fontSize: FontSizes.dailyTitles,
        color:"white",
        fontWeight: 'bold',
        textAlign:"center",
    },

    slider_middle_deco:{
        width: '100%',
        height: 60
    },

    field_text_not_selected:{
        fontSize: FontSizes.registerQuerys,
        textAlign:'left',
        color: Colors.textGrey
    },

    field_text:{
        fontSize: FontSizes.registerQuerys,
        textAlign:'left',
    },

    field_multiple:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 6,
        paddingLeft:10,
        paddingRight:10,
        width:300,
        height:50,
        borderRadius: 10,
        backgroundColor: Colors.inputFieldGrey,
    },
});
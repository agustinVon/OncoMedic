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
        flex:4,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    small_slider_upper_view:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    big_slider_down_view:{
        paddingBottom:'15%',
        width:'100%',
        flex:8,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    daily_down_view:{
        width:'100%',
        flex:5,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:'15%'
    },

    slider_text:{
        maxWidth: 250,
        fontSize: FontSizes.titles,
        color:"white",
        fontWeight: 'bold',
        textAlign:"center",
    },

    slider_middle_deco:{
        width: '100%',
        height: 60
    },

    slider_small_image:{
        width:40,
        height:35
    },

    field_text_not_selected:{
        fontSize: FontSizes.registerQuerys,
        textAlign:'left',
        color: Colors.textGrey
    },

    field_text:{
        width:300,
        fontSize: FontSizes.registerQuerys,
        textAlign:'left',
    },

    field_multiple:{
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        fontSize: FontSizes.registerQuerys,
        marginTop: 6,
        paddingLeft:10,
        paddingRight:10,
        width:300,
        height:50,
        borderRadius: 10,
        backgroundColor: Colors.inputFieldGrey,
    },

    field_incorrect:{
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 6,
        width:300,
        height:50,
        paddingLeft:10,
        paddingRight:10,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: Colors.inputFieldGrey,   
    },

    center_container:{
        marginTop:20,
        marginBottom:20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },

    title:{
        fontSize: FontSizes.titles,
        fontWeight: 'bold',
    }
});
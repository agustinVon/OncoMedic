import React, {useState,useEffect} from 'react'
import {ToastAndroid,Platform, AlertIOS,
        SafeAreaView,StyleSheet,Dimensions,View,Image,Text,TextInput,ScrollView, Button,Modal,Pressable, KeyboardAvoidingView, Alert } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {ButtonCustomeOrange} from '../Buttons/ButtonCustomeOrange.js'
import {connect} from 'react-redux'
import {logoutUser, setPersonalInformationAction} from '../../reduxStore/actions/registerAction'
import DropDownPicker from 'react-native-dropdown-picker'
import {useFocusEffect} from '@react-navigation/native'

import {CustomPicker} from '../commonComponents/Pickers/CommonPicker'
import {DatePickerModal} from '../commonComponents/Modals/DatePickerModal'
import {NotCompletedAlert} from '../commonComponents/Alerts/Alert'
import {PasswordField} from '../commonComponents/Fields/PasswordField'
import Icon from 'react-native-vector-icons/AntDesign';


const {width} = Dimensions.get("window")
 
const Register = ({navigation,setPersonalInformationAction}) => {

    const [email,setEmail] = useState("")
    const [name,setName] = useState ("")
    const [surname,setSurname] = useState("")
    const [password,setPassword] = useState("")
    const [gender,setGender] = useState(0)
    const [birth, setBirth] = useState(new Date())
    const [birthWasSelected, setBirthSelected] = useState(false)
    const [emailValidate,setEValidate] = useState(true)
    const [dateModalVisible, setDModal] = useState(false)

    useEffect(() => {
        const email_aux = email;
        email_aux.length > 0 ? email_aux.includes("@") ? setEValidate(true) : setEValidate(false) : setEValidate(true)
    }, [email])

    
    

    const handleSwitchToRegisterMedic = () =>{
        if(name==='' || surname ==='' || password ===''|| email===''){
            <NotCompletedAlert title={'Error'} description={'Complete todos los campos'}/>
        }
        else{
            setPersonalInformationAction({name:name,surname:surname,email:email,gender:gender,birth:birth.toDateString(),password:password})
            navigation.navigate("register_medic")
        }
       
    }

    const notifyMessage = (msg) => {
        Platform.OS === 'android' ? ToastAndroid.show(msg, ToastAndroid.SHORT) : AlertIOS.alert(msg)
    }

    const genderTypes=[{label: 'Masculino', value:0,},
                {label: 'Femenino', value:1},
                {label: 'Otro', value:2}]

    return (
        
        <SafeAreaView style={RegisterUser.reguse_cont_background}>
            <View style={RegisterUser.reguse_top}>
                <Image source={require("../../img/ic_user.png")}/>
                <Text style={RegisterUser.reguse_text_top}>   DATOS USUARIO</Text>
            </View>
            <View>
                <Image style={RegisterUser.reguse_top_img} source={require("../../img/register_deco.png")}/>
            </View>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1}}
            >
            <ScrollView  contentContainerStyle={RegisterUser.scroll} >
                <View style={RegisterUser.reguse_cont_cont}>
                    <View style={RegisterUser.reguse_cont_regusein_inputs}>
                            <View>
                                <Text style={RegisterUser.reguse_text_upinput}>Nombre</Text>
                                <TextInput onChangeText={setName} placeholderTextColor="#c4c4c4" placeholder="Ingrese su nombre" style={RegisterUser.reguse_textInput}></TextInput>
                            </View>
                            <View style={{marginTop:25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Apellido</Text>
                                <TextInput onChangeText={setSurname} placeholderTextColor="#c4c4c4" placeholder="Ingrese su Apellido" style={RegisterUser.reguse_textInput}></TextInput>
                            </View>
                            <View style={{marginTop:25}}>
                            <Text style={RegisterUser.reguse_text_upinput}>Contrase??a</Text>
                                <View style={RegisterUser.log_text_container}>
                                    <PasswordField setPassword={setPassword}/>
                                </View>
                            </View>
                            
                            <View style={{marginTop: 25, zIndex:40}}>
                                <View>
                                    <Text style={RegisterUser.reguse_text_upinput}>G??nero</Text>
                                    <View>
                                        <CustomPicker items={genderTypes} defaultValue={gender} setValue={setGender} placeHolder={'Seleccione su genero'}/>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Email</Text>
                                <TextInput onChangeText={setEmail} value={email} keyboardType={"email-address"} placeholderTextColor="#c4c4c4" placeholder="Ingrese su email" style={ emailValidate ? RegisterUser.reguse_textInput : RegisterUser.reguse_textInputRed }></TextInput>
                                {
                                    !emailValidate  && <Text style={RegisterUser.reguse_validvalue}>Introducir valor valido</Text>
                                }
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={RegisterUser.reguse_text_upinput}>Fecha de Nacimiento</Text>
                                <Pressable style={RegisterUser.reguse_date_picker_container} onPress={()=>(setDModal(true),setBirthSelected(true))}>
                                    {console.log('fecha: '+birth)}
                                    {console.log('fue seleccionada la fecha: '+birthWasSelected)}
                                    {birthWasSelected?
                                    <View>
                                        <Text style={RegisterUser.reguse_text}> {''+birth.getDate()+' / '+(birth.getMonth()+1)+' / '+birth.getFullYear()} </Text>
                                    </View>
                                    :
                                    <Text style={RegisterUser.reguse_text_upinput}>Seleccione su fecha de nacimiento</Text>
                                    }    
                                </Pressable>
                            </View>
                            <ButtonCustomeOrange title={"Continuar"} handleFunction={handleSwitchToRegisterMedic} marginT={{marginTop: 50}}/>
                    
                    </View>
                </View>
            </ScrollView>
            <DatePickerModal visibility={dateModalVisible} setVisibility={setDModal} date={birth} setDate={setBirth}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const mapDispatchToProps = {
    setPersonalInformationAction,
    logoutUser
}

export default connect(null,mapDispatchToProps)(Register)

const RegisterUser = StyleSheet.create({

    reguse_drop_down_picker:{
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:50,
    },
    log_text_container:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 6,
        paddingLeft:10,
        paddingRight:10,
        width:300,
        height:50,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",
    },
    log_textInput:{

        flex:5,
        height:50,
        width:20,
        fontSize: 17,
        borderRadius: 10,
    },
    log_icon_style:{
        backgroundColor:'#E3E3E3',
        flex:1,
    },
    reguse_validvalue:{
        color:"red"
    },
    scroll:{
        width,
        paddingBottom: 30,
        alignItems: 'center',
    },
    reguse_cont_cont:{
        width,
        justifyContent: 'center',
        position:"relative",
        flex: 1,
    },
    reguse_text_upinput:{
        color:"#AAAAAA",
        fontSize: 17,
    },
    reguse_textInput:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",   
    },
    reguse_date_picker_container:{
        marginTop: 6,
        width:300,
        height:50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#E3E3E3",  
    },
    reguse_text:{
        fontSize: 17,
        zIndex: 10000,
    },
    reguse_textInputRed:{
        marginTop: 6,
        width:300,
        height:50,
        fontSize: 17,
        padding: 10,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "#E3E3E3",   
    },
    reguse_cont_regusein_inputs:{
        flexDirection: 'column',
        width:300,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        flex: 4,
        marginBottom:50
    },
    reguse_top_color:{
        backgroundColor:"#B189F8",
        height:80,
        width
    },
    reguse_text_reguse:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    reguse_text_in:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#B189F8",
        marginLeft: 5,
    },

    reguse_text_top:{
        fontWeight: 'bold',
        fontSize: 18,
        color:"white"
    },
    reguse_top_img:{
        width,
        flex: 0,
    },
    reguse_cont_background:{
        width,
        height:"100%",
        alignItems: 'center',
        flexDirection: 'column',
    },
    reguse_top:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        width,
        height:80,
        flex: 0,
        backgroundColor: "#B189F8",
    },
    reguse_btn_gender:{
        backgroundColor: "#E3E3E3",
        width:300,
        height:50,
        padding: 10,
        borderRadius: 10,
        justifyContent:'center',
        alignContent: 'center', 
    },
})

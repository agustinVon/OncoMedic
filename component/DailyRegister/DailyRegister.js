import React,{useState,useEffect,useRef,useContex} from 'react'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import  Swiper  from "react-native-swiper";
import {DailyRegisterOptions} from './DailyRegisterOptions.js'
import {DailyRegisterButtons} from './DailyRegisterButtons.js'
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import {DailyRegisterOptional} from './DailyRegisterOptional'
import {DailyRegisterBut} from './DailyRegisterBut'



const DailyRegister = ({navigation,idR}) => {
    const swiper = React.useRef(null);

    const [id,setId] = useState(idR)
    const [mood,setMood] = useState('');
    const [sad,setSad] = useState('')
    const [hungry,setHungry] = useState('');
    const [hid,setHid] = useState('');
    const [run,setRun] = useState('');
    const [social,setSocial] = useState('');
    const [isLoading, setLoading] = useState(false)

    const buttonsText = {
        Apetito:['Menos de lo normal', 'Normal', 'Mas de lo normal'],
        Hidratacion:['Menos de 1L','Entre 1L y 2L','Mas de 2L'],
        ActividadFisica:['No','Menos de 30 min','Entre 30 y 60 min'],
        Social:['No. No vi a nadie','Si. Limitado a pocas interacciones interpersonales','Si. Vi a conocidos y amigos mas de una hora','Si. Vi a conocidos y amigos mas de 2 horas']
    }

    useEffect(()=>{
        setId(id)
    },[id])

    useEffect(() =>{
        if(social !== '' ){
            if(mood!=='' && sad !== '' && hungry !== '' && hid !== '' && run !== ''){
                pushDR()
            }
            else{
                Alert.alert(
                    "Error",
                    "Algunas preguntas del registro quedaron sin responder",
                    [
                        {
                            text: 'OK',
                        }
                    ]
                )
            }
        }
    },[social])

    useEffect(()=>{
        if(mood !== '' || sad !== '' || hungry !== '' || hid !== '' || run !== ''){
            swiper.current.scrollBy(1)
        }
    },[mood,sad,hungry,hid,run])


    const swipeNext = (i) =>{
        console.log('mood ' + mood)
        console.log('sad '+sad)
        console.log('hungry '+hungry)
        console.log('hid '+ hid)
        console.log('run ' + run)
        console.log('social' + social)
        console.log('--------------')

        swiper.current.scrollBy(1)
    }

    const pushDR = () =>{
        setLoading(true)
        const date = new Date()
        const userDocument = firestore()
        .collection('diaryReg')
        .doc(id +'EN'+ date.getDate() +'DE'+ date.getMonth() +'DE'+ date.getFullYear())
        .set({
            date:date,
            id:id,
            mood:mood,
            sad:sad,
            hungry:hungry,
            hid:hid,
            run:run,
            social:social
        })
        .then((docRef) => {
            setLoading(false)
            navigation.navigate('status',{text:"Registro diario"})
        })
        .catch((error) => {
            setLoading(false)
            navigation.navigate('fail',{e:error})
        });
    }

    return (
        <View style={{height:'100%', width:'100%', flex:1}}>
        {isLoading &&
        <View style={{
        position: 'absolute',
        backgroundColor:'#707070',
        zIndex:1000,
        opacity:0.7, 
        width:'100%',
        height:'110%',
        justifyContent:'center'}}>
        <ActivityIndicator animating={true} color={"#FFFFFF"} size='large' />
        </View>}
        <Swiper ref={swiper} loop={false} activeDotColor={"#FFB13A"}>
            <DailyRegisterOptional text={'Que tan animado te encuentras hoy? \n (1 es muy mal 10 es muy bien)'} image={require("../../img/ic_child.png")} setValue={setMood}/>
            <DailyRegisterOptional text={'Sentiste algun dolor hoy?'} image={require("../../img/ic_sad.png")} setValue={setSad}/>
            <DailyRegisterBut options={buttonsText.Apetito} text={"¿Tuviste apetito?"} image={require("../../img/ic_utensils.png")} setValue={setHungry}/>
            <DailyRegisterBut options={buttonsText.Hidratacion} text={"¿Te hidrataste?"} image={require("../../img/ic_water.png")} setValue={setHid}/>
            <DailyRegisterBut options={buttonsText.ActividadFisica} text={"Hiciste actividad fisica?"} image={require("../../img/ic_run.png")} setValue={setRun}/>
            <DailyRegisterBut options={buttonsText.Social} text={"Tuviste contacto social?"} image={require("../../img/ic_social.png")} setValue={setSocial}/>
        </Swiper>
        </View>
        
    )
}

const mapStateToProps = (state) => {
    return {
        idR: state.user_data.id
    }
}

export default connect(mapStateToProps)(DailyRegister)

import React from 'react'
import { View,Image } from 'react-native'
import {GeneralStyle} from '../styles/GeneralStyle'
import SymptomContainer from './SymptomContainer'
import {ButtonCustomeWhite} from '../Buttons/ButtonCustomeWhite'
import {cleanSymptoms} from '../../reduxStore/actions/symptomActions'
import { connect } from 'react-redux'
import firestore from '@react-native-firebase/firestore';

const SymptomSummary = ({navigation, cleanSymptoms,symptoms,id,cancer}) => {
    
    const editSymptom = (symptom , grade) =>{
        console.log(symptom)
        navigation.navigate('registro_sintoma',{preSymptom :symptom , preGrade: grade})
    }

    const pushSymptoms = () =>{
        const date = new Date()
        firestore()
        .collection('symptoms')
        .add({
            id:id,
            date:date,
            cancer:cancer,
            symptoms: Array.from(symptoms.values())
        })
        .then(() => {
            cleanSymptoms()
            navigation.navigate('status',{text:"Registro de sintomas"})
        })
        .catch((error) => {
            navigation.navigate('fail',{e:error})
        });
    }

    return(
        <View style={{flex:1}}>
            <View style={GeneralStyle.symptom_sum_view}>
                <SymptomContainer editSymp = {editSymptom}/>
                <ButtonCustomeWhite title={'Confirmar'} handleFunction={() => pushSymptoms()}/>
            </View>
            <Image resizeMode={ 'stretch' } style={{ width:'100%' }} source={ require('../../img/register_deco.png') }/>
        </View>
    )
}

const mapDispatchToProps = {
    cleanSymptoms,
}
const mapStateToProps = (state) => {
    return {
        symptoms : state.symptom_data.symptoms,
        id: state.user_data.id,
        cancer: state.user_data.cancer
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SymptomSummary)
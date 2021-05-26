import React from 'react'
import { View,Image } from 'react-native'
import {GeneralStyle} from '../styles/GeneralStyle'
import SymptomContainer from './SymptomContainer'
import {ButtonCustomeWhite} from '../Buttons/ButtonCustomeWhite'
import {cleanSymptoms} from '../../reduxStore/actions/symptomActions'
import { connect } from 'react-redux'

const SymptomSummary = ({navigation, cleanSymptoms}) => {

    const submitSymptom= ()=>{
        cleanSymptoms()
    }

    return(
        <View style={{flex:1}}>
            <View style={GeneralStyle.symptom_sum_view}>
                <SymptomContainer/>
                <ButtonCustomeWhite title={'Confirmar'} handleFunction={() => submitSymptom()}/>
            </View>
            <Image resizeMode={ 'stretch' } style={{ width:'100%' }} source={ require('../../img/register_deco.png') }/>
        </View>
    )
}

const mapDispatchToProps = {
    cleanSymptoms,
}

export default connect(null,mapDispatchToProps) (SymptomSummary)
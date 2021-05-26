import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import { GeneralStyle } from '../styles/GeneralStyle'
import { SymptomItem } from './SymptomItem'
import { connect } from 'react-redux'

const SymptomContainer = ({symptoms}) =>{

    return(
        <View style={GeneralStyle.symptom_container}>
            <ScrollView>
                {symptoms.map(item => {
                    return(<SymptomItem symptom={{symptom:item.symptom, grade:item.grade}}/>)
                })}
            </ScrollView>
        </View>
    )
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
    return {
        symptoms : state.symptom_data.symptoms,
    }
}

export default connect(mapStateToProps,)(SymptomContainer)
import React,{useState,useEffect,useRef,useContext} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {RegisterElements} from './RegisterElements.js'
import RegisterElementsMore from './RegisterElementsMore.js'
import RegisterIllustrator from './RegisterIllustrator.js'
import { connect } from 'react-redux';


const Register_Swiper = ({navigation,smokeState,dbtState,dbtMed}) => {

    var index =0;
 
    const swiper = React.useRef(null);

    const nextScreen = (value) =>{
        swiper.current.scrollBy(1);
    }

    return (
            <Swiper ref={swiper}  loop={false} activeDotColor={"#B189F8"}>
                
                <RegisterElements key="1"  type={"smoke"} nextScreen={nextScreen}/>
                    {
                        smokeState != 0 && <RegisterElementsMore type={"smoke"} nextScreen={nextScreen}/>
                    }
                <RegisterElements type={"diabetic"} nextScreen={nextScreen}/>
                    {
                        dbtState && <RegisterElementsMore type={"diabetic_more"} nextScreen={nextScreen}/>
                    }
                <RegisterElementsMore type={"medicamento"} nextScreen={nextScreen}/>

                <RegisterIllustrator goHomeFunction={() => navigation.navigate('wait_screen')}/>
            </Swiper>            
    )
}
const mapStateToProps = (state) => {
    return {
        smokeState: state.user_data.smoke.smoke,
        dbtState: state.user_data.dbt.dbt,
        dbtMed: state.user_data.dbt.med
    }
}

export default connect(mapStateToProps)(Register_Swiper)


import React,{useState,useEffect,useRef,useContext} from 'react'
import { SafeAreaView } from 'react-native'
import  Swiper  from "react-native-swiper";
import {RegisterElements} from './RegisterElements.js'
import RegisterElementsMore from './RegisterElementsMore.js'
import RegisterIllustrator from './RegisterIllustrator.js'
import { connect } from 'react-redux';
import {SliderButtons} from '../commonComponents/Sliders/SliderButtons'
import {SliderType} from '../commonComponents/Sliders/SliderType'
import { BigSliderFields } from '../commonComponents/Sliders/BigSliderFields'
import { BigSliderButtons } from '../commonComponents/Sliders/BigSliderButtons'
import { BigSliderRadio } from '../commonComponents/Sliders/BigSliderRadio'


const Register_Swiper = ({navigation,smokeState,dbtState,dbtMed}) => {

    const [smoke,setSmoke] = useState(null)
    const [sTime,setSmokeTime]= useState('')
    const [sQnt,setQnt]= useState('')
    const [dbt,setDbt]= useState(null)
    const [medDbt,setMedDbt]= useState(null)
    const [hip, setHip] = useState(false)
    const [epoc, setEpoc] = useState(false)
    const [acv, setACV] = useState(false)
    const [inf, setInf] = useState(false)

    const smokeOptions = [{label:'Fumo actualmente' ,value:1},
                        {label:'Fumaba', value:2},
                        {label: 'No', value:0}]
    const smokeDetails = ['¿Cantidad por dia?', '¿Cuantos meses fumaste?']
    const dbtOptions= [{label:'Si', value:1},{label:'No', value:0}]   
    const meds = [{label:"Insulina",value:'Insulina'},
                {label:"Metmorfina",value:"Metmorfina"},
                {label:"Otra",value:"Otra"}]
    const radio = ["Hipertensión","EPOC","ACV","Infarto"]           

    useEffect(()=>{
        if(smoke !== null || dbt !== null || medDbt !== null){
            swiper.current.scrollBy(1)
        }
    },[smoke,dbt,medDbt])

 
    const swiper = React.useRef(null);

    const nextScreen = (value) =>{
        swiper.current.scrollBy(1);
    }

    return (
            <Swiper ref={swiper}  loop={false} activeDotColor={"#B189F8"}>

                <SliderButtons options={smokeOptions} text={"¿FUÍSTE/ERES FUMADOR?"}
                image={require("../../img/ic_smoke.png")} setValue={setSmoke}
                type={SliderType.register}/>
                    {
                        smoke != 0 && <BigSliderFields options={smokeDetails} setValue={[setQnt,setSmokeTime]} image={require("../../img/ic_smoke.png")} type={SliderType.register}/>
                    }
                <SliderButtons options={dbtOptions} text={"¿TENES DIABETES?"}
                image={require("../../img/ic_diabetic.png")} setValue={setDbt}
                type={SliderType.register}/>
                    {
                        dbt && <BigSliderButtons options={meds} image={require("../../img/ic_diabetic.png")} setValue={setMedDbt} type={SliderType.register}/>
                    }

                <BigSliderRadio options={radio} setValue={[setHip,setEpoc,setACV,setInf]} image={require("../../img/ic_diabetic.png")}/>
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


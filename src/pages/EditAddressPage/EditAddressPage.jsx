import React, { useState } from "react";
import {Header} from '../../components/Header/Header'
import { City } from "../../components/Inputs/City";
import { Complement } from "../../components/Inputs/Complement";
import { District } from "../../components/Inputs/District";
import { Number } from "../../components/Inputs/Number";
import { State } from "../../components/Inputs/State";
import { Street } from "../../components/Inputs/Street";
import { AddressPageStyle } from "./style";
import { Button } from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import * as MyRoutes from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
// import { validateCPF, validateEmail, validateName } from "../../constants/constants";

const EditAddressPage = () => {

    const navigate = useNavigate()

    const [form, onChange] = useForm({
        street: "", number: "",
        complement: "",  district: "",
        city: "", state: "",
    })

    const [isValid, setIsValid] = useState(true)
    const [isStreetValid, setIsStreetValid, isNumberValid, setIsNumberValid,
           isComplementValid, setIsComplementValid, isDistrictValid, setIsDistrictValid,
           isCityValid, setIsCityValid, isStateValid, setIsStateValid  ] = useState(true)
    
    const [errorText, setErrorText] = useState(undefined)

    const EditAddress = () => {
        axios.post(`${BASE_URL}/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.token)
            goToProfilePage(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
            setIsValid(false)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsStreetValid(validateStreet(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsComplementValid(validateComplement(form.complement))
        setIsDistrictValid(validateDistrict(form.district))
        setIsCityValid(validateCity(form.city))
        setIsStateValid(validateState(form.State))
    }
    return(
        <>
        <Header showArrow={'true'} showTitle={'true'} title={'Endereço'}/>
        <AddressPageStyle>
            {isValid ?

                <form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} color="#B8B8B8" isValid={isStreetValid}/>
                <Number name="number" value={form.number} onChange={onChange} color="#B8B8B8" isValid={isNumberValid}/>
                <Complement name="complement" value={form.complement} onChange={onChange} color="#B8B8B8" isValid={isComplementValid}/>
                <District name="district" value={form.district} onChange={onChange} color="#B8B8B8" isValid={isDistrictValid}/>
                <City name="city" value={form.city} onChange={onChange} color="#B8B8B8" isValid={isCityValid}/>
                <State name="state" value={form.state} onChange={onChange} color="#B8B8B8" isValid={isStateValid}/>
                <Button type="submit" buttonTitle="Salvar"/>
                </form>
                
                : 
                
                <form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} color="#e02020" isValid={isStreetValid}/>
                <Number name="number" value={form.number} onChange={onChange} color="#e02020" isValid={isNumberValid}/>
                <Complement name="complement" value={form.complement} onChange={onChange} color="#e02020"isValid={isComplementValid}/>
                <District name="district" value={form.district} onChange={onChange} color="#e02020" isValid={isDistrictValid}/>
                <City name="city" value={form.city} onChange={onChange} color="#e02020" isValid={isCityValid}/>
                <State name="state" value={form.state} onChange={onChange} color="#e02020" isValid={isStateValid}/>
                <p>{errorText}.</p>
                <Button type="submit" buttonTitle="Salvar"/>
                </form>}


        </AddressPageStyle>
        </>
    )
}

export default EditAddressPage;
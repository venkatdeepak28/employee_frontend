import { useState } from "react"
import { Link, useNavigate, Navigate } from "react-router-dom"
import axios from 'axios'
import Cookies from "js-cookie"

import Home from '../Home'
import {MainContainer, FormContainer, LabelEl, InputEl, ButtonEl, ErrPara} from './styledComonents'

const Login = () => {
    const [userName, setUsername] = useState("")
    const [passWord, setPassword] = useState("")
    const [errValue, setErrvalue] = useState("")
    const [showPass, setShowpass] = useState(false)
    const navigate = useNavigate()
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
        return <Navigate to="/" element={<Home />} />
    }

    const changeUser = event => setUsername(event.target.value)
    const changePass = event => setPassword(event.target.value)
    const changeShow = event => setShowpass(event.target.checked)

    const addJwt = data => {
        console.log(data)
        Cookies.set('jwt_token', data.jwtToken, {expires: 30})
        Cookies.set('username', data.username, {expires: 30})
        navigate("/")
    }

    const sendUserPass = async (event) => {
        event.preventDefault()

        const obj = {
            "username": userName,
            "password": passWord
        }

        const url = "https://wordle-production-6fcb.up.railway.app/login"
        const response = 
        await axios.post(url, obj)
        .catch(err => {
            setErrvalue("*Invalid Credentials")
        });

        addJwt(response.data)
    }

    return (
        <MainContainer>
            <p>
                <Link to="/" className="link-el">
                    Logo
                </Link>
            </p>
            <FormContainer>
                <LabelEl htmlFor="user">
                    Username
                </LabelEl>
                <InputEl type="text" value={userName} id="user" onChange={changeUser} placeholder="Enter Username" />
                <LabelEl htmlFor="pass">
                    Password
                </LabelEl>
                <InputEl type={showPass ? "text" : "password"} value={passWord} id="pass" onChange={changePass} placeholder="Enter Password" />

                <div className="show-div">
                  <input type="checkbox" className="checkbox-el" id="check" onChange={changeShow} />
                  <label className="label-el" htmlFor="check">Show Password</label>
                </div>

                <ButtonEl type="submit" onClick={sendUserPass}>
                    Login
                </ButtonEl>
                <ErrPara>{errValue}</ErrPara>
            </FormContainer>
        </MainContainer>
    )
}

export default Login
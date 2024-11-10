import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import axios from 'axios'
import {Popup} from 'reactjs-popup'
import {MainContainer, ListContainer, ButtonEl, MainHeading, FormContainer, LabelEl, ButtonSubmitEl} from './styledComponents'

const CreateEmployee = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [designation, setDesignation] = useState("HR")
    const [gender, setGender] = useState("")
    const [course, setCourse] = useState("")
    const [image, setImage] = useState()
    const [emailVerification, setEmailVerification] = useState(false)
    const [otp, setOtp]= useState("")
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")


    const username = Cookies.get("username")
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("jwt_token")
        navigate("/login")
    }

    const sendData = async (event) => {
        event.preventDefault()

        console.log("Hello")

        const formData = new FormData();
        formData.append('image', image)
        formData.append("name", name)
        formData.append("email", email)
        formData.append("mobile", mobile)
        formData.append("designation", designation)
        formData.append("gender", gender)
        formData.append("course", course)
        formData.append("emailVerification", emailVerification)
        
        await axios.post("https://wordle-production-6fcb.up.railway.app/file-check", formData, { headers: {"Content-Type": "multipart/form-data"}})
        .then(() => {
            setSuccess("Employee Created Successfully")
        })
    }

    const changeDesig = event => setDesignation(event.target.value)

    const changeName = event => setName(event.target.value)

    const changeEmail = event => setEmail(event.target.value)

    const changeMobile = event => setMobile(event.target.value)

    const changeGender = event => setGender(event.target.value)
    
    const changeCourse = event => setCourse(event.target.value)

    const changeFile = event => {
        setImage(event.target.files[0])
    }

    const sendEmail = async () => {
        const obj = {
            body: {
                to: email
            }
        }

        await axios.post("https://wordle-production-6fcb.up.railway.app/email-check", obj)
        .then(() => {
            setErr("")
        })
        .catch((e) => {
            console.log(`${e}`)
            setErr("Email Already Exists!")
        })

    }

    const checkOtp = async () => {
        const obj = {
            body: {
                otpValue: otp
            }
        }

        await axios.post("https://wordle-production-6fcb.up.railway.app/otp-check", obj)
        .then(() => {
            setEmailVerification(!emailVerification)
        })
        .catch((e) => setErr("Error"))
    }

    const overlayStyles = {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '16px',
      }
 

    return (
        <MainContainer>
            <ListContainer>
                <Link to="/" className="link-el">
                    Home
                </Link>
                <Link to="/employee-list" className="link-el">
                    Employee List
                </Link>
                <li>{username}</li>
                <li>
                    <ButtonEl type="submit" onClick={logout}>
                        Logout
                    </ButtonEl>
                </li>
            </ListContainer>
            <MainHeading>
                Create Employee
            </MainHeading>
            <FormContainer>
                <div className="label-container">
                    <LabelEl>
                        Name
                    </LabelEl>
                    <input type="text" className="input-el" value={name} onChange={changeName} />
                </div>
                <div className="label-container">
                    <LabelEl>
                        Email
                    </LabelEl>
                    {emailVerification === true ? (<p>{email}</p>) : (<input type="text" className="input-el" value={email} onChange={changeEmail} />)}
                    <Popup
                        modal
                        trigger={
                        emailVerification ? null : <button onClick={sendEmail}>
                            Verify
                        </button>
                        }
                        overlayStyle={overlayStyles}
                    >
                        {close => {

                            if (emailVerification === true) {
                                close()
                            }

                            return (
                                <>
                                    <div className="pop-container">
                                        <div className="name-container">
                                            <p>Your Email: {email}</p>
                                            <button onClick={sendEmail}>
                                                Verify email
                                            </button>
                                            <p>{err}</p>
                                        </div>
                                        {err === "" ? (<div className="email-container">
                                            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP"  />
                                            <button onClick={checkOtp}>
                                                Submit
                                            </button>
                                        </div>) : null}
                                    </div>
                                </>
                                )
                        }}
                    </Popup>
                </div>
                <div className="label-container">
                    <LabelEl>
                        Mobile 
                    </LabelEl>
                    <input type="text" className="input-el" value={mobile} onChange={changeMobile} maxLength={10} />
                </div>
                <div className="label-container">
                    <LabelEl>
                        Designation
                    </LabelEl>
                    <select onChange={changeDesig}>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div className="label-container">
                    <p className="para">Gender</p>
                    <div>
                        <label htmlFor="male">
                            Male 
                        </label>
                        <input type="radio" className="input-el" name="gender" id="male" value="Male" onChange={changeGender} />
                        <label htmlFor="female">
                            Female 
                        </label>
                        <input type="radio" className="input-el" name="gender" id="female" value="Female" onChange={changeGender} />
                    </div>
                </div>
                <div className="label-container">
                    <p className="para">Course</p>
                    <div className="checkbox-container">
                        <div className="course-container">
                            <label htmlFor="mca">
                                MCA
                            </label>
                            <input type="radio" className="input-el" name="course" id="mca" value="MCA" onChange={changeCourse} />
                        </div>
                        <div className="course-container">
                            <label htmlFor="bca">
                                BCA
                            </label>
                            <input type="radio" className="input-el" name="course" id="bca" value="BCA" onChange={changeCourse} />
                        </div>
                        <div className="course-container">
                            <label htmlFor="bsc">
                                BSC
                            </label>
                            <input type="radio" className="input-el" name="course" id="bsc" value="BSC" onChange={changeCourse} />
                        </div>
                    </div>
                </div>

                <div className="label-container">
                    <label className="upload-el">
                        Upload Image
                    </label>
                    <input type="file" name="foo" accept="image/png, image/jpeg" onChange={changeFile} />
                </div>

                <ButtonSubmitEl type="submit" onClick={sendData}>
                    Submit
                </ButtonSubmitEl>
                
                <p>{success}</p>
                <p>{err}</p>


            </FormContainer>

        </MainContainer>
    )
}

export default CreateEmployee
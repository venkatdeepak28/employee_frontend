import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'
import {MainContainer, ListContainer, ButtonEl, CreateMainContainer, InnerMainContainer, CreateButton, Para, EmployeeContainer} from './styledComponents'

const EmployeeList = () => {
    const [data, setData] = useState([])
    const username = Cookies.get("username")
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://wordle-production-6fcb.up.railway.app/employee-list")
        .then((response) => response.json())
        .then((json => {
            const newArr = json.map(eachValue => ({
                fId: eachValue.f_id,
                fName: eachValue.f_name,
                fMobile: eachValue.f_mobile,
                fEmail: eachValue.f_email,
                fDesignation: eachValue.f_designation,
                fCourse: eachValue.f_course,
                fGender: eachValue.f_gender,
                fDate: eachValue.f_createDate,
                fImage: eachValue.f_image,
                fEmailVerified: eachValue.f_emailverified
            }))
            setData(newArr)
        }))
    })

    const logout = () => {
        Cookies.remove("jwt_token")
        navigate("/login")
    }

    const navToCreate = () => {
        navigate("/create-employee")
    }

    const deleteUser = async (id) => {
        await axios.delete(`https://wordle-production-6fcb.up.railway.app/delete/${id}`)
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
            <CreateMainContainer>
                <>
                    <CreateButton type="submit" onClick={navToCreate}>
                        Create Employee
                    </CreateButton>
                </>
                <InnerMainContainer>
                    <Para>Total: {data.length}</Para>
                    
                </InnerMainContainer>
            </CreateMainContainer>
            <EmployeeContainer>
                <li>
                    ID
                </li>
                <li>
                    Image
                </li>
                <li>
                    Name
                </li>
                <li>
                    Email
                </li>
                <li>
                    Mobile No.
                </li>
                <li>
                    Designation
                </li>
                <li>
                    Gender
                </li>
                <li>
                    Course
                </li>
                <li>
                    Create Date
                </li>
                <li>
                    Action
                </li>
            </EmployeeContainer>
            <ul className="main-container">
                {data.map(eachValue => (
                    <li className="list-container" key={eachValue.fId}>
                        <p>{eachValue.fId}</p>
                        <img src={`https://wordle-production-6fcb.up.railway.app/` + eachValue.fImage} alt="profile" className="profile" />
                        <p>{eachValue.fName}</p>
                        <p className="email-para">{eachValue.fEmail}</p>
                        <p>{eachValue.fMobile}</p>
                        <p>{eachValue.fDesignation}</p>
                        <p>{eachValue.fGender}</p>
                        <p>{eachValue.fCourse}</p>
                        <p>{eachValue.fDate}</p>
                        <div>
                            <br />
                            <button onClick={() => deleteUser(eachValue.fId)} className="custom-btn"> 
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            
        </MainContainer>
    )
}

export default EmployeeList

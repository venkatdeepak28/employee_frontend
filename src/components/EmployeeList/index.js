import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import {MainContainer, ListContainer, ButtonEl, CreateMainContainer, InnerMainContainer, CreateButton, Para, InputEl, EmployeeContainer} from './styledComponents'

const EmployeeList = () => {
    const username = Cookies.get("username")
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("jwt_token")
        navigate("/login")
    }

    const navToCreate = () => {
        navigate("/create-employee")
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
                    <Para>Total: 0</Para>
                    <InputEl type="text" value="" placeholder="Search Keyword" />
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
            
        </MainContainer>
    )
}

export default EmployeeList
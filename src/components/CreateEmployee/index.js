import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import {MainContainer, ListContainer, ButtonEl, MainHeading, FormContainer} from './styledComponents'

const CreateEmployee = () => {
    const username = Cookies.get("username")
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("jwt_token")
        navigate("/login")
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
                <label>
                    Name
                </label>
                <input type="text" />
                <label>
                    Email
                </label>
                <input type="text" />
                <label>
                    Mobile No
                </label>
                <input type="text" />

            </FormContainer>
        </MainContainer>
    )
}

export default CreateEmployee
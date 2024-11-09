import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import {MainContainer, ListContainer, ButtonEl, Para, InnerContainer} from './styledComponents'

const Home = () => {
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
            <InnerContainer>
                <Para>
                    Welcome to Admin Panel
                </Para>
            </InnerContainer>
        </MainContainer>
    )
}

export default Home
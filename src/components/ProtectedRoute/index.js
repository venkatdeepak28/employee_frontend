import { Navigate, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from '../Login'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  console.log(token)
  if (token !== undefined) {
    return <Outlet />
  }

  return <Navigate to="/login" element={<Login />} />
}

export default ProtectedRoute
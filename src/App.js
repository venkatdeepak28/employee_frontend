import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css';

import Login from './components/Login'
import Home from './components/Home'
import EmployeeList from './components/EmployeeList'
import CreateEmployee from "./components/CreateEmployee";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App;

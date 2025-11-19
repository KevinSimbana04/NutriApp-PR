import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Register'
import Listar from './pages/Listar'
import FoodDetail from './pages/FoodDetail'
import PersonalData from './pages/PersonalData'
//import { Forgot } from './pages/Forgot'
//import { Confirm } from './pages/Confirm'
//import { NotFound } from './pages/NotFound'
import Dashboard from './layout/Dashboard'
//import Profile from './pages/Profile'
//import List from './pages/List'
//import Details from './pages/Details'
//import Create from './pages/Create'
//import Update from './pages/Update'
//import Chat from './pages/Chat'
//import Reset from './pages/Reset'



function App() {



  
  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<PersonalData/>} />
          <Route path='listar' element={<Listar/>} />
          <Route path='food/:name' element={<FoodDetail/>} />
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
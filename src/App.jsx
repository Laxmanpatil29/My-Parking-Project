import { Route, Routes } from 'react-router-dom'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { UserSidebar } from './component/layouts/UserSidebar'
import { UserProfile } from './component/user/UserProfile'

// import './App.css'
import axios from 'axios'
import { AdminProfile } from './component/admin/AdminProfile'
import { AdminSidebar } from './component/layouts/AdminSidebar'
import { ProviderSidebar } from './component/layouts/ProviderSidebar'
import Login from './component/Login'
import { ProviderProfile } from './component/provider/ProviderProfile'
import { Ui } from './component/user/Ui'
import { CommonUi } from './component/common/CommonUi'
import { Navbar } from './component/Navbar'
// import {SignUp} from './component/common/SignUp'



function App() {

  
axios.defaults.baseURL="http://localhost:3000"
  

/*  return(
<>
<Navbar></Navbar>

       <Routes>
       <Route path='/login' element={<Login/>}></Route>
     </Routes> 
</>


  )*/

  return (

    <>
  
<body className='layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open'>

<div className="app-wrapper">
  {/* <UserSidebar></UserSidebar> */}
  {/* <Route path='/' element={<Navbar/>}></Route> */}
  {/* <CommonUi/> */}
  <Navbar></Navbar>

  <Routes>
 
    {/* <Route path='/' element={<CommonUi/>}></Route> */}
     <Route path='/login' element={<Login/>}></Route> 
  
    
    

    <Route path='/user' element={<UserSidebar/>}>
      <Route path='profile' element={<UserProfile/>}></Route>
      {/* <Route path='login' element={<Login/>}></Route> */}
      <Route path='' element={<Ui/>}></Route>
    {/* <Route path='signup' element={<SignUp/>}></Route> */}
    </Route>

    <Route path='/admin' element={<AdminSidebar/>}>
      <Route path='profile' element={<AdminProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>

    <Route path='/provider' element={<ProviderSidebar/>}>
      <Route path='profile' element={<ProviderProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>

  </Routes>

     </div>
    </body>
    </>
  )
}

export default App

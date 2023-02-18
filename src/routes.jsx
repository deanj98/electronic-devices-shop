import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import About from './pages/aboutus';
import Login from './pages/login';
import Prodoucts from './pages/prodoucts';
import { BrowserRouter as Router ,Routes , Route , Navigate } from 'react-router-dom';
import SignUpUser from './components/signupuser';
import LoginUser from './components/loginuser';
import Dashboard from './pages/dashboard';


const AllRoutes =({nightmode}) =>{
    return(
        <>  
            <Router>
              <Routes>
                <Route path='/home' element={<Navigate replace to="/"/>} />
                <Route path='/prodoucts' element={<Prodoucts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}>
                  <Route path='signup' element={<SignUpUser/>}>signup</Route>
                  <Route path='loginuser' element={<LoginUser/>}>login</Route>
                </Route>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/' element={<Home nightmode={nightmode}/>}/>
              </Routes>
            </Router>
        </>
    );
}

export default AllRoutes;
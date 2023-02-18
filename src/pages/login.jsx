import { Outlet , Link } from "react-router-dom";
import Header  from "../components/header";
// import Footer from '../components/footer';
import '../css/login.css'


const Login = () => {
    return ( 
        <>
            <Header />
            <div className="buttons-filed">
                <Link className="button-filed" to="/login/loginuser">login</Link>
                <Link className="button-filed" to="/login/signup">signup</Link>
            </div>
            <Outlet />
            {/* <Footer /> */}
        </>
     );
}
 
export default Login;
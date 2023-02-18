import { Link } from 'react-router-dom';
import '../css/home.css'


const ListDashboard = () => {
  return ( 
    <>
        <li className="menu-item">
            <Link className='link-item' to="/dashboard">dashboard</Link>
        </li>
    </>
  )
}
export default ListDashboard;
import '../css/home.css'
import { Link } from 'react-router-dom';
import ListDashboard from './ListDashboard';
// import { useEffect, useState } from 'react';


const Header = () => {
   
    const issession = true;
   
   
    return ( 
    <>
        <div
        //  style={{backgroundColor:`${bgcolor}`}} 
         className="header-container">
            <div className="top-header">
                <div className="logo"><i className="fa fa-microchip" aria-hidden="true"></i></div>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item"><Link className='link-item' to="/Home">home</Link></li>
                        <li className="menu-item"><Link className='link-item' to="/prodoucts">prodoucts</Link></li>
                        <li className="menu-item"  ><Link className='link-item' to="/Login">log in
                        {/* <ul>
                            <li className="menu-item">
                                <Link className="link-item">login</Link>
                            </li>
                            <li className="menu-item">
                                <Link className="link-item">signup</Link>
                            </li>
                        </ul> */}
                        </Link></li>
                        { issession ?  <ListDashboard/> : null }                 
                        <li className="menu-item"><Link className='link-item' to="/About">about us</Link></li>
                    </ul>
                    <div className="dark-mode">
                      {/* <button onClick={()=>onbgcolor()}>{bodytext}</button> */}
                      </div>
                </div>
            </div>
            <div
              // style={{color:`${bodycolor}`}} 
              className="sub-header">
                <h1 className='kimbo'>Bestshop</h1>
                <h3>welcome to our ecommere site.</h3>
                <h5>this site is for selling phone , laptop and tv!</h5>
            </div>
        </div>

    </>
     );
       
       
    }
 
export default Header;
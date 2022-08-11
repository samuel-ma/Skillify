// import {FaRegBell} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
// import {IoLibraryOutline} from 'react-icons/io'
// import {RiTaskLine} from 'react-icons/ri'
// import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FiHome, FiUsers, FiUserPlus, FiMail, FiBell} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'
import './css/navbar.css'

export default function Navbaer() {
  return (
    <div className="navbar-wraper d-flex justify-content-between align-items-center">
      <div className="logo">
        logo
      </div>
      <div className="navbar-content d-flex justify-content-between align-items-center">
        <div className="navbar-links-wraper d-flex align-items-center sm-hide">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/library'>Library</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/'>Messages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/library'>Friends</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-user-actions d-flex align-items-center">
          <div className="badge-card">
            <div className="rounded-icon">
              <FiBell />
            </div>
            <span>10</span>
          </div>
          <div className="badge-card">
            <div className="rounded-icon">
              <FiMail />
            </div>
            <span>10</span>
          </div>
          <NavLink className="d-flex align-items-center nav-link" to='/account'>
            <div className="user-avatar">
              <img className='rounded-circle' src={process.env.PUBLIC_URL+'/images/kon.png'} alt='' />
            </div>
            <span className='sm-hide mx-2'>Kon</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}


export const MobileNavbar = () => {
  return(
    <div className="mobile-navbar">
      <div className="inner-mobile-navbar d-flex justify-content-between align-items-center w-100">
        <NavLink className='mobile-nav-item d-flex flex-column justify-content-center align-items-center' to='/friends'>
          <div className='mobile-nav-icon'>
            <FiUsers />
          </div>
          <span className="small">Friends</span>
        </NavLink>
        <NavLink className='mobile-nav-item d-flex flex-column justify-content-center align-items-center' to='/users'>
          <div className='mobile-nav-icon'>
            <FiUserPlus />
          </div>
          <span className="small">Users</span>
        </NavLink>
        <NavLink className='mobile-nav-item d-flex flex-column justify-content-center align-items-center center' to='/'>
          <div className='mobile-nav-icon'>
            <FiHome />
          </div>
          <span className="small"></span>
        </NavLink>
        <NavLink className='mobile-nav-item d-flex flex-column justify-content-center align-items-center' to='/messages'>
          <div className='mobile-nav-icon'>
            <FiMail />
          </div>
          <span className="small">Messages</span>
        </NavLink>
        <NavLink className='mobile-nav-item d-flex flex-column justify-content-center align-items-center' to='/library'>
          <div className='mobile-nav-icon'>
            <BiLibrary />
          </div>
          <span className="small">Library</span>
        </NavLink>
      </div>
    </div>
  )
}


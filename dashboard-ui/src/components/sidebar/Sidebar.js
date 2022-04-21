import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TimelineIcon from '@mui/icons-material/Timeline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration: "none"}}>  
        <span className="logo"><AirplayRoundedIcon/>GL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to='/users' style={{textDecoration: "none"}}>  
          <li>
            <PersonIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{textDecoration: "none"}}>  
          <li>
            <StorefrontIcon className='icon'/>
            <span>Products</span></li>
          </Link>
          <li>
            <ShoppingBagIcon className='icon'/>
            <span>Orders</span></li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span></li>
            <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className='icon'/>
            <span>Stats</span></li>
          <li>
            <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span></li>
            <p className="title">SERVICE</p>
          <li>
            <TimelineIcon className='icon'/>
            <span>System Health</span></li>
          <li>
            <SummarizeIcon className='icon'/>
            <span>Logs</span></li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span></li>
            <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span></li>
          <li>
            <ExitToAppIcon className='icon'/>
            <span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
        
        </div>
    </div>
  )
}

export default Sidebar
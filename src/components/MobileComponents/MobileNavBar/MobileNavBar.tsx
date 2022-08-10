import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import MenuIcon from '../../../icons/MenuIcon'


export default () => {

   const [ open, setOpen ] = useState<boolean>(false)

   const navigate = useNavigate()

   return <>
      <div className={`nav-bar__mobile ${open ? 'nav-bar__mobile__blur' : ''}`}>
         <div className="nav-bar__mobile__shop-name" onClick={() => navigate('/')}>
            <p className='nav-bar__mobile__shop-name-p'>Cofetaria Acasa</p>
            <p className='nav-bar__mobile__shop-name__author'>by Claudia Branzaru</p>
         </div>
         <div className="nav-bar__mobile__dropdown">
            <div className="nav-bar__mobile__dropdown__menu" onClick={() => setOpen(prev => !prev)}>
               <MenuIcon/>
            </div>
            <div
               className={`nav-bar__mobile__dropdown__links ${open ? 'nav-bar__mobile__dropdown__links--visible' : ''}`}>
               <NavLink
                  className={({ isActive }) => isActive ? 'nav-bar__mobile__dropdown__links__link' + ' nav-bar__mobile__dropdown__links__link--active' : 'nav-bar__mobile__dropdown__links__link'}
                  to={'/'}>
                  Acasa
               </NavLink>
               <NavLink
                  className={({ isActive }) => isActive ? 'nav-bar__mobile__dropdown__links__link' + ' nav-bar__mobile__dropdown__links__link--active' : 'nav-bar__mobile__dropdown__links__link'}
                  to={'/catalog'}>
                  Catalog
               </NavLink>
               <NavLink
                  className={({ isActive }) => isActive ? 'nav-bar__mobile__dropdown__links__link' + ' nav-bar__mobile__dropdown__links__link--active' : 'nav-bar__mobile__dropdown__links__link'}
                  to={'/about-us'}>
                  Despre noi
               </NavLink>
            </div>
         </div>
      </div>
   </>
}
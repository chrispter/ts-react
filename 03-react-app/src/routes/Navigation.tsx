import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-Lazyload/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                    <li>
                        <NavLink 
                            to='/lazy1' 
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/lazy2' 
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/lazy3' 
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='lazy1' element={ <LazyPage1 /> } />
                <Route path='lazy2' element={ <LazyPage2 /> } />
                <Route path='lazy3' element={ <LazyPage3 /> } />
                <Route path='/*' element={ <Navigate to="/lazy1" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

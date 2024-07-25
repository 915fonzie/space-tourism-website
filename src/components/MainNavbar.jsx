import { useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/shared/logo.svg'

export default function MainNavBar({windowSize}) {

    const navLinksRef = useRef(null)
    const burgerRef = useRef(null)

    const activeStyles = windowSize >= 768 ?
        {
            borderBottom: "2px solid",
        } :
        {
            borderRight: "2px solid"
        }

    function handleToggleNav() {
        burgerRef.current.classList.toggle("toggle")
        navLinksRef.current.classList.toggle("nav-open")
    }

    function handleClickLink() {
        burgerRef.current.classList.remove("toggle")
        navLinksRef.current.classList.remove("nav-open")
    }

    return (
        <header className='main-header'>
            <nav className='main-navbar'>
                <Link to="/"><img className='logo-icon' src={logo} alt='logo icon' /></Link>
                {windowSize >= 1440 && <div className='navbar-breakline-wrapper'><hr></hr></div>}
                <div className='main-nav-links' ref={navLinksRef}>
                    <NavLink
                        to="."
                        style={({ isActive }) => isActive ? activeStyles : null}
                        onClick={() => handleClickLink()}
                    >
                        <span>00</span> Home
                    </NavLink>
                    <NavLink
                        to="destinations"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        onClick={() => handleClickLink()}
                    >
                        <span>01</span> Destinations
                    </NavLink>
                    <NavLink
                        to="crew"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        onClick={() => handleClickLink()}
                    >
                        <span>02</span> Crew
                    </NavLink>
                    <NavLink
                        to="technology"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        onClick={() => handleClickLink()}
                    >
                        <span>03</span> Technology
                    </NavLink>
                </div>
                <div className='burger' onClick={(e) => handleToggleNav(e)} ref={burgerRef}>
                    <span className='line-1'></span>
                    <span className='line-2'></span>
                    <span className='line-3'></span>
                </div>
            </nav>
        </header>
    )
}
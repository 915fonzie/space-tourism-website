import { useEffect, useState } from 'react'
import MainNavBar from './MainNavbar'
import { Outlet, useLocation } from 'react-router'

export default function Layout({windowSize}) {
    const [background, setBackground] = useState('home-bg')
    const { pathname } = useLocation()
    
    useEffect(() => {
        if (pathname === "/") {
            setBackground('home-bg')
        }
        if (pathname.includes("/destinations")) {
            setBackground('destinations-bg')
        }
        if (pathname.includes("/crew")) {
            setBackground('crew-bg')
        }
        if (pathname.includes("/technology")) {
            setBackground('technology-bg')
        }
    },[pathname])

    return (
        <div className={`site-wrapper ${background}`}>
            <MainNavBar windowSize={windowSize}/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
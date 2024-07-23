import React, { useState } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function DestinationsLayout() {
    
    const { pathname } = useLocation()
    const [img, setImg] = useState(null)

    const activeStyles = {
        borderBottom: "2px solid white",
    }

    if (pathname === "/destinations" || pathname === '/destinations/') {
        return <Navigate to="moon" replace/>
    }

    return (

            <motion.div
                className='destination-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 0.5}}
                exit={{ opacity: 0 }}
            >
                <h5><span>01</span> pick your destination</h5>
                <AnimatePresence mode='wait' initial={false}>
                    <motion.img
                        key={pathname}
                        src={img}
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ x: 300, opacity: 0 }}
                    />
                </AnimatePresence>
                <nav>
                    <NavLink
                        to="moon"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        >
                        Moon
                    </NavLink>
                    <NavLink
                        to="mars"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        Mars
                    </NavLink>
                    <NavLink
                        to="europa"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        Europa
                    </NavLink>
                    <NavLink
                        to="titan"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        Titan
                    </NavLink>
                </nav>
                <Outlet context={{ img, setImg }}/>
            </motion.div>
    )
}
import React, { useState } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Technology() {
    const { pathname } = useLocation()
    const [img, setImg] = useState(null)
    const activeStyles = {
        border: "none",
        backgroundColor: "white",
        color: "#0B0D17"
    }

    if (pathname === "/technology" || pathname === '/technology/') {
        return <Navigate to="launch-vehicle" replace/>
    }

    return (
            <motion.div
                className='technology-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 0.5}}
                exit={{ opacity: 0 }}
            >
                <h5><span>01</span> pick your destination</h5>
                <div className='technology-img-text'>      
                    <AnimatePresence mode='wait' initial={false}>
                        <motion.img
                            key={pathname}
                            src={img}
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            exit={{ x: "100%", opacity: 0 }}
                            />
                    </AnimatePresence>
                    <div className='technology-links-text'>     
                        <nav>
                            <NavLink
                                to="launch-vehicle"
                                style={({ isActive }) => isActive ? activeStyles : null}
                                end
                                >
                                1
                            </NavLink>
                            <NavLink
                                to="spaceport"
                                style={({isActive}) => isActive ? activeStyles : null}
                                >
                                2
                            </NavLink>
                            <NavLink
                                to="space-capsule"
                                style={({isActive}) => isActive ? activeStyles : null}
                                >
                                3
                            </NavLink>
                        </nav>
                        <Outlet context={{ img, setImg }} />
                    </div>
                </div>
            </motion.div>
    )
}
import { useState } from 'react'
import { useLocation, Outlet, Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function CrewLayout() {
    
    const { pathname } = useLocation()
    const [img, setImg] = useState(null)

    const activeStyles = {
        backgroundColor: "white",
        opacity: 100,
    }

    if (pathname === "/crew" || pathname === '/crew/') {
        return <Navigate to="douglas-hurley" replace/>
    }

    return (
            <motion.div
                className='crew-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 0.5}}
                exit={{ opacity: 0 }}
            >
                <div className='crew-no-img'>
                    <h5><span>02</span> meet your crew</h5>
                    <Outlet context={{img, setImg}}/>
                    <nav>
                        <NavLink
                            to="douglas-hurley"
                            style={({ isActive }) => isActive ? activeStyles : null}
                            end
                        >
                        </NavLink>
                        <NavLink
                            to="mark-shuttleworth"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                        </NavLink>
                        <NavLink
                            to="victor-glover"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                        </NavLink>
                        <NavLink
                            to="anousheh-ansari"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                        </NavLink>
                    </nav>
                </div>
                <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        className='crew-img-wrapper'
                        key={pathname}
                        src={img}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ x: 100, opacity: 0 }}
                    >
                        <img src={img} />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
    )
}
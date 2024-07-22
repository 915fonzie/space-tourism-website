import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"


export default function Crew() {

    const activeStyles = {
        textDecoration: "underline",
    }
    
    return (
        <AnimatePresence>
            <motion.div
                className='crew-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <nav>
                    <NavLink
                        to="../douglas-hurley"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        end
                        >
                        o
                    </NavLink>
                    <NavLink
                        to="../mark-shuttleworth"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        o
                    </NavLink>
                    <NavLink
                        to="../victor-glover"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        o
                    </NavLink>
                    <NavLink
                        to="../anousheh-ansari"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        o
                    </NavLink>
                </nav>
            </motion.div>
        </AnimatePresence>
    )
}
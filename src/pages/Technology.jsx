import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Technology() {

    const activeStyles = {
        textDecoration: "underline",
    }
    
    return (
        <AnimatePresence>
            <motion.div
                className='technology-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <nav>
                    <NavLink
                        to="../launch-vehicle"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        end
                        >
                        1
                    </NavLink>
                    <NavLink
                        to="../spaceport"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        2
                    </NavLink>
                    <NavLink
                        to="../space-capsule"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                        3
                    </NavLink>
                </nav>
            </motion.div>
        </AnimatePresence>
    )
}
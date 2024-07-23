import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"


export default function Crew({data, img}) {

    const activeStyles = {
        backgroundColor: "white",
        opacity: 100,
    }
    
    return (
        <AnimatePresence>
            <motion.div
                className='crew-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h5><span>02</span> meet your crew</h5>
                <h4>{data.role}</h4>
                <h3>{data.name}</h3>
                <p>{data.bio}</p>
                <nav>
                    <NavLink
                        to="../douglas-hurley"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        end
                        >
                    </NavLink>
                    <NavLink
                        to="../mark-shuttleworth"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                    </NavLink>
                    <NavLink
                        to="../victor-glover"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                    </NavLink>
                    <NavLink
                        to="../anousheh-ansari"
                        style={({isActive}) => isActive ? activeStyles : null}
                        >
                    </NavLink>
                </nav>
                <img src={img} />
            </motion.div>
        </AnimatePresence>
    )
}
import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function Destinations({data, img}) {

    const activeStyles = {
        borderBottom: "2px solid white",
    }


    return (
        <AnimatePresence>
            <motion.div
                className='destination-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1}}
                exit={{ opacity: 0 }}
            >
                <h5><span>01</span> pick your destination</h5>
                <img src={img} />
                <div>
                    <nav>
                        <NavLink
                            to="../moon"
                            style={({ isActive }) => isActive ? activeStyles : null}
                            >
                            Moon
                        </NavLink>
                        <NavLink
                            to="../mars"
                            style={({isActive}) => isActive ? activeStyles : null}
                            >
                            Mars
                        </NavLink>
                        <NavLink
                            to="../europa"
                            style={({isActive}) => isActive ? activeStyles : null}
                            >
                            Europa
                        </NavLink>
                        <NavLink
                            to="../titan"
                            style={({isActive}) => isActive ? activeStyles : null}
                            >
                            Titan
                        </NavLink>
                    </nav>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <hr></hr>
                    <div className='distance-travel'>
                        <div>
                            <p>avg. distance</p>
                            <h6>{data.distance}</h6>
                        </div>
                        <div>
                            <p>est. travel time</p>
                            <h6>{data.travel}</h6>
                        </div>
                    </div>
                </div>   
            </motion.div>
        </AnimatePresence>
    )
}
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Homepage() {

    const {pathname} = useLocation()

    return (
            <motion.div
                className='home-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <div className='home-text'>
                    <h5>So, you want to travel to</h5>
                    <h1>space</h1>
                    <p>
                        Let's face it, if you want to go to space,
                        you might as well genuinely go to outer space
                        and not hover kind of on the edge of it.
                        Well sit back and relax because we'll give
                        you a truly out of this world experience!
                    </p>
                </div>
                <Link to="destinations/moon">Explore</Link>
            </motion.div>
    )
}
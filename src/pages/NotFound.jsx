import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

export default function NotFound() {
    return (
        <AnimatePresence>
            <motion.div
                className='not-found'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h2>Page could not be found</h2>
                <Link to="/">Return Home</Link>
            </motion.div>
        </AnimatePresence>
    )
}
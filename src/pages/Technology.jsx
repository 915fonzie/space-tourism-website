import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useImage from '../hooks/useImage'

export default function Technology({data, img}) {

    useImage(img)
    
    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                key={data.name}
                className='technology-text'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ x: 100, opacity: 0 }}
                >
                <h4>the terminology...</h4>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </motion.div>
        </AnimatePresence>
    )
}
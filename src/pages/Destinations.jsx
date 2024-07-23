import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useImage from '../hooks/useImage'

export default function Destinations({data, img}) {

    useImage(img)

    return (
        <AnimatePresence mode='wait' initial={false}>

            <motion.div
                className='destination-text'
                key={data.name}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 100, opacity: 0 }}
                >
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
            </motion.div>
        </AnimatePresence>
    )
}
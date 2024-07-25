import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

export default function NotFound() {
    return (
        <motion.div
            className='not-found'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
        >
            <h2>Page could not be found</h2>
            <Link to="/">Return Home</Link>
        </motion.div>
    )
}
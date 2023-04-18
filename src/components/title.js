import Image from "next/image"
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants"

export default function Title({title}) {
    return (
        <motion.div variants={fadeIn('up', 0.05)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.03}}  className="title-container">
            <div className="title-style">
                <div className="title">{title}</div>
            </div>
        </motion.div>
    )
}
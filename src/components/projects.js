import Image from "next/image"
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants"

export default function Projects() {
    return (
        <div className="projects relative" id="project">
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="project-container">
                <Image src="/projects/projects-1.png" className="object-cover" width={1800} height={1000}/>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}}  className="project-container">
                <Image src="/projects/projects-2.png" className="object-cover" width={1800} height={1000}/>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}}  className="project-container">
                <Image src="/projects/projects-3.png" className="object-cover" width={1800} height={1000}/>
            </motion.div>
        </div>
    )
}
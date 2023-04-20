import Image from "next/image"
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants"

export default function Hero() {
    return (
        <div className="hero relative">
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}}>
             <Image src="/anime-programmer.jpg" width={700} height={900} />
            </motion.div>
            <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="contents w-1/2">
                <p className="code">&lt;Start/&gt;</p>
                <h1 className="heading-jumbo">Hello.<br></br>I'm Otgonbileg.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor adipisci repudiandae assumenda facilis! Quo deserunt molestiae non dolor asperiores perferendis.</p>
            </motion.div>
        </div>
    )
}
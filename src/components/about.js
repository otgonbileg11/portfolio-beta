import Image from "next/image";
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants"

export default function About() {
    return (
        <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="about-container" id="about">
        <div className="about">
            <div className="code-wrp">
                <div data-line-nr="01" className="code-l">
                    <div className="methods">class</div>
                    <span className="propname"> Anonymous</span>
                     &#123;
                </div> 
                <div data-line-nr="02" className="code-l">
                    <div className="dot">··</div>
                    <div className="comment">// I'm ambitious and I love new challenges :&#40;
                    </div>
                </div> 
                <div data-line-nr="03" className="code-l">
                    <div className="dot">··</div>
                    <div className="comment">// My vast variety of skills is continuously expanding.</div>
                </div> 
                <div data-line-nr="04" className="code-l">
                    <div className="dot">··</div>
                    <div className="methods">constructor</div>
                    &#40;&#41; 	&#123;
                </div>
                <div data-line-nr="05" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.<span className="prop2">name</span>
                    <span className="scope"> = </span> 
                    <span className="string">'Micheal Jackson'</span>
                </div> 
                <div data-line-nr="06" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.<span className="prop2">dayOfBirthTimestamp</span> 
                    <span className="scope"> = </span>
                    <span className="number">10301963</span>
                </div> 
                <div data-line-nr="07" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.
                    <span className="prop2">email</span> 
                    <span className="scope"> = </span>
                    <span className="string">'anonymous1963@gmail.com'</span>
                </div>
                <div data-line-nr="08" className="code-l">
                    <div className="dot">··</div>
                    &#125;
                </div>
                <div data-line-nr="09" className="code-l">
                    <div className="dot">··</div>
                    <span className="propname">workExperience</span>
                    &#40;&#41; 	&#123;
                    </div>
                <div data-line-nr="10" className="code-l">
                    <div className="dot">····</div>
                    <div className="methods">return </div>
                    &#40;&#91;
                </div> 
                <div data-line-nr="11" className="code-l">
                    <div className="dot">······</div>
                    &#123;
                    <span className="string">'2023-2023'</span> 
                    :
                    <span className="string"> 'NIT - Developer class'</span>
                    &#125;
                </div> 
                <div data-line-nr="14" className="code-l">
                    <div className="dot">······</div>
                    &#123;
                    <span className="string">'2023-now'</span>
                    :
                    <span className="string"> 'Front-End Developer at Nasha Tech LLC'</span>
                    &#125;
                </div>
                <div data-line-nr="17" className="code-l">
                    <div className="dot">····</div>
                    &#93;&#41;
                    </div>
                <div data-line-nr="18" className="code-l">
                    <div className="dot">··</div>
                    &#125;
                </div> 
                <div data-line-nr="19" className="code-l">
                    <div className="dot">··</div>
                    <span className="propname">education</span>
                    &#40;&#41; 	&#123;
                </div> 
                 <div data-line-nr="20" className="code-l">
                    <div className="dot">····</div>
                    <div className="methods">return </div> &#40;&#91; 
                </div>
                <div data-line-nr="21" className="code-l">
                    <div className="dot">······</div>
                    &#123;
                    <span className="string">'2012-2014'</span>
                    :
                    <span className="string"> 'Mongolian University of Science and Technology - Mongolia - IT'</span>
                    &#125;&#44;
                </div> 
                <div data-line-nr="22" className="code-l">
                    <div className="dot">······</div>
                    &#123;
                    <span className="string">'2019-2021'</span>
                    :
                    <span className="string"> 'Nagaoka University of Technology - Japan - IT'</span>
                    &#125;
                </div>
                <div data-line-nr="23" className="code-l">
                    <div className="dot">····</div>
                    &#93;&#41;
                </div>
                <div data-line-nr="24" className="code-l">
                    <div className="dot">··</div>
                    &#125;
                </div>
                <div data-line-nr="25" className="code-l">
                    <div className="dot">··</div>
                    <span className="propname">skills</span>
                    &#40;&#41; 	&#123;
                </div> 
                <div data-line-nr="26" className="code-l">
                    <div className="dot">····</div>
                    <div className="methods">return </div>
                    &#40;&#91; 
                    <span className="string">'HTML/CSS/JS', 'Vue', 'Node.js', 'Bootstrap/Tailwind', 'Webpack/Vite', 'SCSS/Less', 'npm/yarn/pnpm', 'SSR', 'GIT/CVS', 'Web-extensions', 'Web Sockets', 'Firebase', 'PHP', 'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere', 'Motion design', 'UX/UI', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress', 'Jest', 'Nuxt' </span> 
                    <span className="cursor"></span> 
                     &#93;&#41;
                </div> 
                <div data-line-nr="27" className="code-l">
                    <div className="dot">··</div>
                    &#125;
                </div>
                <div data-line-nr="28" className="code-l">
                &#125;
                </div>
            </div>
         </div>
        </motion.div>
    )
}
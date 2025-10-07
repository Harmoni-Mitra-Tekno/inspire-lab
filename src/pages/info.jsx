import { motion } from "framer-motion";
import AccordionComponent from "../components/accordion";
import { body } from "framer-motion/client";
import Map from "../components/map";

function Info(){
    const firstHeadline = 'Welcome to the Intelligent Signal Processing Research Laboratory'.split(" ")
    const secondHeadline = 'of the Electrical Engineering Department at Politeknik Negeri Bandung.'.split(" ")
    return(
        <div className="bg-black w-full flex justify-center items-center flex-col">
            <div className="mt-[88px] text-4xl font-semibold text-center px-40 py-80">
                {firstHeadline.map((word, index) => (
                    <motion.span
                        initial={{opacity: 0, y: 12 }}
                        animate={{opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        key={index}
                        className="inline-block mr-1.5"
                    >
                        {word}
                    </motion.span>
                ))}
                <motion.span
                    initial={{opacity: 0, y: 12 }}
                    animate={{opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9}}
                    className="text-[#FCA311] font-semibold playfair-display">
                        [Inspire]
                </motion.span>
                {secondHeadline.map((word, index) => (
                    <motion.span
                        initial={{opacity: 0, y: 12 }}
                        animate={{opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 10) }}
                        key={index}
                        className="inline-block mr-1.5"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="w-full px-20">
                <AccordionComponent contents={[
                    {
                        header: "Advances in Audio, Visual, and Language Processing",
                        body: "Our research investigates image and video processing, as well as acoustic and speech processing. We also work on speech recognition and understanding, video big data analytics, motion tracking, and natural language understanding and generation."
                    },{
                        header: "Core Algorithms for Intelligent Systems",
                        body: "The ISPL team develops the core algorithms that power intelligent systems. We use a multi-faceted approach, combining advanced statistical modeling, cutting-edge signal processing theory, and machine intelligence techniques to meet the demands of a rapidly evolving information-technology landscape. Our extensive research is reflected in our many journal publications across diverse fields, including image and speech signal processing, data fusion, pattern recognition, and intelligent systems."
                    },{
                        header: "Building the Next Generation of Intelligent Surveillance",
                        body: "Our vision is to develop algorithms that enable seamless human-machine interaction and powerful video big data analytics. We're creating intelligent surveillance systems by integrating diverse technologies like image, acoustic, and speech processing, as well as motion tracking and natural language understanding and generation."
                    }
                ]}
                />
            </div>
            <div className="w-full flex justify-center items-center flex-col my-24 gap-14">
                <h1 className="text-4xl font-semibold">Find Us on the Map</h1>
                <div className="w-3/4 h-150">
                    <Map className="h-full" markerPosition={[-6.871412028179578, 107.57344161531171]}/>
                </div>
            </div>
            
        </div>
    )
}

export default Info;
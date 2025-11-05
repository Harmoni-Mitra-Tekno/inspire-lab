import Aurora from "../../../components/animations/aurora.jsx";
import { motion } from "framer-motion";
import TextType from "../../../components/animations/textType.jsx";

function Headline(){
    const headline = "Discover the Inspirational Research at Intelligent Signal Processing Research Group";
    const headlineWords = headline.split(" "); // Splitting the sentence into words
    return(
        <div className="h-[550px] md:h-[800px]">
            <div className="flex flex-col top-[190px] md:top-[380px] absolute h-fit z-0 text-center w-full px-5 gap-15">
                <div className="w-full flex flex-row justify-center items-center gap-10">
                    <div className="text-center">
                        {headlineWords.map((word, index) => (
                            <motion.p
                                initial={{opacity: 0, y: 12 }}
                                animate={{opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 * index }}
                                key={index}
                                className="text-4xl md:text-6xl font-medium inline-block mr-1.5"
                            >
                                {word}
                            </motion.p>
                        ))}
                    </div>
                </div>
                <div className="w-full justify-center">
                    <TextType 
                    className="text-lg md:text-3xl font-light text-[#FCA311] text-center"
                    text={["Gain Insight and Drive Innovation with Intelligent Signal Processing"]}
                    typingSpeed={20}
                    deletingSpeed={20}
                    pauseDuration={3000}
                    textColors={["#E5E5E5"]}
                    cursorCharacter="_"/>
                </div>
            </div>
            <Aurora
                className='w-full'
                colorStops={["#0926f4", "#0926f4", "#0926f4", "#1A5799", "#93bfef", "#1A5799",]}
                blend={0.5}
                amplitude={0.75}
                speed={1}
            />
        </div>
    )
}

export default Headline;
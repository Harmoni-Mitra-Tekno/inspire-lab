import Aurora from "../components/animations/aurora";
import ScrollReveal from "../components/animations/scrollReveal";
import TextType from "../components/animations/textType";
import Threads from "../components/animations/threads";
import { motion } from "framer-motion";

function Home() {
    const headline = "Discover the Inspirational Research at Intelligent Signal Processing Research Laboratory";
    const headlineWords = headline.split(" "); // Splitting the sentence into words
    return (
        <div className="flex left-0 w-full flex-col">
            <div className="h-[800px]">
                <div className="flex flex-col top-[380px] absolute h-fit z-0 text-center w-full px-5 gap-15">
                    <div className="w-full flex flex-row justify-center items-center gap-10">
                        <div className="text-center">
                            {headlineWords.map((word, index) => (
                                <motion.p
                                    initial={{opacity: 0, y: 12 }}
                                    animate={{opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 * index }}
                                    key={index}
                                    className="text-6xl font-medium inline-block mr-1.5"
                                >
                                    {word}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                    <div className="w-full justify-center">
                        <TextType 
                        className="text-left text-3xl font-light text-[#FCA311]"
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
            <div className="px-20">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={false}
                    baseRotation={10}
                    blurStrength={10}
                >
                    We are the core engine for advanced information technology. ISPL centers on exploiting novel signal processing theory, advanced statistical modeling, and machine intelligence to solve critical challenges in video big data analytics, speech understanding, and complex human-machine interaction.
                </ScrollReveal>
            </div>
        </div>
        
    );
}
export default Home;
import GradientText from "../components/animations/gradientText";
import TextType from "../components/animations/textType";
import Threads from "../components/animations/threads";
import { motion } from "framer-motion";

function Home() {
    const headline = "Discover the Inspirational Research at Intelligent Signal Processing Research Laboratory";
    const headlineWords = headline.split(" "); // Splitting the sentence into words
    return (
        <div className="flex mt-[88px] left-0 w-full bg-[radial-gradient(circle_at_center,_#14213D_0%,_#000000_40%)] ">
            <div className="flex flex-col top-[380px] absolute h-fit z-0 text-center w-full px-5 gap-15">
                <div className="w-full flex flex-row justify-center items-center gap-10">
                    <div className="w-1/4 text-left">
                        {headlineWords.map((word, index) => (
                            <motion.p
                                initial={{opacity: 0, y: 12 }}
                                animate={{opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                key={index}
                                className="text-4xl italic font-medium inline-block mr-1.5"
                            >
                                {word}
                            </motion.p>
                        ))}
                    </div>
                    <motion.p
                        initial={{opacity: 0, y: 12 }}
                        animate={{opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1}}
                        className="w-1/4 text-[#FCA311] flex justify-center items-center text-9xl font-semibold playfair-display">
                            [Inspire]
                    </motion.p>
                </div>
                <div className="w-full justify-center">
                    <TextType 
                    className="text-left text-xl font-light text-[#FCA311]"
                    text={["Gain Insight and Drive Innovation with Intelligent Signal Processing"]}
                    typingSpeed={20}
                    deletingSpeed={20}
                    pauseDuration={3000}
                    textColors={["#E5E5E5"]}
                    cursorCharacter="_"/>
                </div>
            </div>
            <Threads 
            className="w-full h-[800px]"
            amplitude={4} 
            distance={0.3} 
            enableMouseInteraction={true} 
            color={[0.373,0.475,0.918]}/>
        </div>
        
    );
}
export default Home;
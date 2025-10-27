import Aurora from "../components/animations/aurora";
import ChromaGrid from "../components/animations/chromaGrid";
import ScrollReveal from "../components/animations/scrollReveal";
import SpotlightCard from "../components/animations/spotlightCard";
import TextType from "../components/animations/textType";
import Threads from "../components/animations/threads";
import { motion } from "framer-motion";
import fadhlanProfile from "../assets/fadhlan-profile.jpg"

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Griffani Megiyanto Rahmatullah",
    subtitle: "Frontend Developer",
    gradient: "linear-gradient(145deg, #0926f4, #0a0a0a)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: {fadhlanProfile},
    title: "Muhammad Yusuf Fadhlan",
    subtitle: "Researcher",
    gradient: "linear-gradient(180deg, #0926f4, #0a0a0a)",
    url: "https://www.linkedin.com/in/griffani-megiyanto-rahmatullah-258224145/"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Nilla Novita Sari",
    subtitle: "Researcher",
    gradient: "linear-gradient(180deg, #0926f4, #0a0a0a)",
    url: "https://www.linkedin.com/in/nila-novita-sari-573b28133"
  }
];

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
                    We are the core engine for advanced information technology. INSPIRE centers on exploiting novel signal processing theory, advanced statistical modeling, and machine intelligence to solve critical challenges in video big data analytics, speech understanding, and complex human-machine interaction.
                </ScrollReveal>
            </div>
            <div className="flex flex-row p-20 gap-5">
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold">Advances in Audio, Visual, and Language Processing</p>
                        <p>Our research investigates image and video processing, as well as acoustic and speech processing. We also work on speech recognition and understanding, video big data analytics, motion tracking, and natural language understanding and generation.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold">Core Algorithms for Intelligent Systems</p>
                        <p>The INSPIRE team develops the core algorithms that power intelligent systems. We use a multi-faceted approach, combining advanced statistical modeling, cutting-edge signal processing theory, and machine intelligence techniques to meet the demands of a rapidly evolving information-technology landscape. Our extensive research is reflected in our many journal publications across diverse fields, including image and speech signal processing, data fusion, pattern recognition, and intelligent systems.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="w-1/3" spotlightColor="#0926f4">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold">Building the Next Generation of Intelligent Surveillance</p>
                        <p>Our vision is to develop algorithms that enable seamless human-machine interaction and powerful video big data analytics. We're creating intelligent surveillance systems by integrating diverse technologies like image, acoustic, and speech processing, as well as motion tracking and natural language understanding and generation.</p>
                    </div>
                </SpotlightCard>
            </div>
            <div className="bg-[#0a0a0a]">
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
        
    );
}
export default Home;
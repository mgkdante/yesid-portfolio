import {motion} from "framer-motion";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import {useEffect, useState} from "react";

const Hero = () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 5000); // 5000ms = 5s

        return () => clearTimeout(timer); // Clear the timer if the component is unmounted
    }, []);
    return (
        <section className=" w-full h-screen relative mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex fex-row items-start gap-5`}
            >
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi! I'm Yesid
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Frontend Developer</span>{" "}
                        based in Quebec, I love to create beautiful and functional websites.
                    </p>
                </div>
            </div>
            <ComputersCanvas/>

            <div
                className="absolute xs:bottom-10 bottom-32 w-full
        flex justify-center items-center"
            >
                <a href="#about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative"
                        title={"Click here to scroll to next section"}
                    >
                        {showMessage && (
                            <div className="absolute top-0 right-full mr-2 w-32 text-center text-white p-2 rounded">
                                Click here to scroll to the next section
                            </div>
                        )}
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;

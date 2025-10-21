import * as motion from "motion/react-client"
import { useRef } from "react";
import beanie from "../assets/img/beanie.png"


function Hero() {
    const constraintsRef = useRef(null)

    return (
        <>
            <div className="container">
                <h1 className="hero-h-one">Sophie Nora Keil</h1>
                <h2 className="hero-h-two">Frontend Developer and UX/UI Designer</h2>
            </div>


            <motion.div className="drag-container" ref={constraintsRef} style={constraints}>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picone}
                />
               
               

            </motion.div>





        </>
    )
}

export default Hero;

const constraints = {
  width: '100vw',   // full viewport width
  height: '100vh',  // full viewport height
  backgroundColor: 'var(--hue-1-transparent)',
  overflow: 'hidden',       // optional: hides overflow
  position: 'relative'      // important for drag constraints
};

const picone = {
  width: 300,
  height: 220,
  backgroundImage: `url(${beanie})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};
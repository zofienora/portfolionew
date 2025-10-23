import * as motion from "motion/react-client"
import { useRef } from "react";

function About() {
    const constraintsRef = useRef(null)

    return (
        <>
            <motion.div className="drag-container" ref={constraintsRef} style={constraints}>
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    />
                    <h2 className="about-headline">about</h2>
                    <p className="about-text"></p>
            </motion.div>
        

        </>
    )
}

export default About;

const constraints = {
  width: '100vw',   // full viewport width
  height: '100vh',  // full viewport height
  backgroundColor: 'var(--hue-1-transparent)',
  overflow: 'hidden',       // optional: hides overflow
  position: 'relative'      // important for drag constraints
};
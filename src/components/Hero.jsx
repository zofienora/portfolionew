import * as motion from "motion/react-client"
import { useRef } from "react";
import beanie from "../assets/img/beanie.png"
import certificate from "../assets/img/certificate.png"
import controller from "../assets/img/controller.png"
import fire from "../assets/img/fire.jpg"
import ice from "../assets/img/ice.png" 
import mac from "../assets/img/mac.png"
import mario from "../assets/img/mario.png"
import shoe from "../assets/img/shoe.png"
import snow from "../assets/img/snow.jpg"
import swim from "../assets/img/swim.png"
import toast from "../assets/img/toast.png"


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
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={pictwo}
                />
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picthree}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picfour}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picfive}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picsix}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picseven}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={piceight}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picnine}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={picten}
                />

                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={piceleven}
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

const pictwo = {
  width: 300,
  height: 220,
  backgroundImage: `url(${certificate})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picthree = {
  width: 300,
  height: 220,
  backgroundImage: `url(${controller})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picfour = {
  width: 300,
  height: 220,
  backgroundImage: `url(${fire})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picfive = {
  width: 300,
  height: 220,
  backgroundImage: `url(${ice})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picsix = {
  width: 300,
  height: 220,
  backgroundImage: `url(${mac})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picseven = {
  width: 300,
  height: 220,
  backgroundImage: `url(${mario})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const piceight = {
  width: 300,
  height: 220,
  backgroundImage: `url(${shoe})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picnine = {
  width: 300,
  height: 220,
  backgroundImage: `url(${snow})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const picten = {
  width: 300,
  height: 220,
  backgroundImage: `url(${swim})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};

const piceleven = {
  width: 300,
  height: 220,
  backgroundImage: `url(${toast})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '20%',
  backgroundPosition: 'center',
  borderRadius: 10,
};
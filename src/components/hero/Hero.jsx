import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import certificate from "/certificate.png";
import person from "/emmy.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>

            
        {/* upper elements */}
        <div className={`${css.upperElements}`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText">
            Hey There, <br /> 
            <span className="fs-1">I&apos;m Emeka</span>
          </motion.span>
          <motion.span 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="secondaryText">
            I design beautiful simple things
            <br />
            And i love what i do
          </motion.span>
        </div>

        {/* image */}
        <motion.div 
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={css.person}>
          <motion.img 
          variants={slideIn("up", "tween", 0.5, 1)}
          src={person} alt="" className="w-50"/>
        </motion.div>

        {/* email */}
        <a href="mailto:ojjiemeka@gmailcom" className={css.email}>
          ojjiemeka@gmail.com
        </a>

        {/* lower elements */}
        <div className={`${css.lowerElements}`}>
          <div className={`${css.experience}`}>
            <div className="primaryText">4</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={`${css.certificate}`}>
            <img src={certificate} alt="certificate" srcSet={certificate} />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>FRONT END DEVELOPER</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

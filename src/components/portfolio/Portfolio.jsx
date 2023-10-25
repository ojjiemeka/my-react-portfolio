import { fadeIn, staggerChildren } from "../../utils/motion";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={` paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>

      <div className={` innerWidth flexCenter ${css.container}`}>
        <div className={` flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p className="mt-1">Perfect solution for digital experience</p>
          </div>

          <span className="secondaryText">Explore More...</span>
        </div>

        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="projects"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="projects"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="projects"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

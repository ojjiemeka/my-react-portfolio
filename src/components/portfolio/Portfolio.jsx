import { fadeIn, staggerChildren, textVariant, } from "../../utils/motion";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
// import work1 from './logistic-website.png';

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <motion.a href="https://ship2xpress.netlify.app/" variants={fadeIn("up", "tween", .5, .6)} className="d-grid text-center">
            <img src="./logistic-website.png" alt="project" />
            <span className="mt-2">Logistics Website</span>
          </motion.a>
          <motion.a href="https://ojjiemeka.github.io/portfolio/" variants={fadeIn("up", "tween", .7, .6)} className="d-grid text-center">
            <img src="./portfolio1.png" alt="project" />
            <span className="mt-2">Sample Portfolio Website</span>
          </motion.a>
          <motion.a href="##" variants={fadeIn("up", "tween", .9, .6)} className="d-grid text-center">
            <img src="./nft-website.png" alt="project" />
            <span className="mt-2">NFT website</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

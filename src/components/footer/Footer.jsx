import { footerVariants, staggerChildren } from "../../utils/motion";
import Input from "../input/Input";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="contact"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
               
        <div className={css.left}>
          <span className={` t-1`}>
            Let&apos;s make something <br />
            amazing together.
          </span>
          <span className={` t-1 ${css.cusSpan}`}>
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

       <div className="w-100">
       <Input/> 
       </div>


        {/* <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Footer;

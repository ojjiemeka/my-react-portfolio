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
          <Input />
        </div>
      </motion.div>

      <div className={css.right}>
        {/* <div className={css.info}>
            <p>145 New York, FL 5467, USA</p>
          </div> */}
        <ul className={`d-flex justify-content-evenly ${css.menu}`}>
          <li>
            <a href="">
              <i className="bx bx-sm bxl-whatsapp"></i>
            </a>
          </li>

          <li>
            <a href="">
              <i className="bx bx-sm bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bx bx-sm bxl-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bx bx-sm bxl-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Footer;

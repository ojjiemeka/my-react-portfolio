import { helpText, projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import css from "./Expertise.module.scss";
import { motion } from "framer-motion";

function Expertise() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
      >
        <a className="anchor" id="expertise"></a>

      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={`${css.leftSide}`}>
          {projectExperience.map((exp, i) => {
            return (
              <>
                <motion.div 
                initial="hidden"
                whileInView="show"
                variants={fadeIn('right', 'tween', (i+1)*0.2, 1)}
                viewport={{ once: false, amount: 0.25 }}
                className={css.exp} key={i}>
                  <div className="flexCenter" style={{ background: exp.bg }}>
                    <exp.icon size={25} color="white" />
                  </div>

                  <div>
                    <span>{exp.name}</span>
                    <span>{exp.projects} Projects</span>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
        viewport={{ once: false, amount: 0.25 }}
         className={css.rightSide}>
          <span className={css.p_Text}> What i do?</span>
          {helpText.map((paragraph, i) => {
            return (
              <>
                <span className={css.secondaryText} key={i}>
                  {paragraph}
                </span>
              </>
            );
          })}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className={css.p_Text}>285+</span>
              <span className={css.secondaryText}>Projects Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className={css.p_Text}>190+</span>
              <span className={css.secondaryText}>Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Expertise;

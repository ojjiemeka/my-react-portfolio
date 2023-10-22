import React from 'react'
import css from "./Work.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2, zoomIn } from '../../utils/motion';
import { workExp } from '../../utils/data';

const Work = () => {
  return (
    <motion.section 
    initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
    className={`${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <span className="text-center primaryText yPaddings">
                My Work Expertise
            </span>

            <div className={`flexCenter ${css.experiences}`}>
            {
               workExp.map((exp, i) => {
                return (
                    <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={textVariant2}
                    viewport={{ once: false, amount: 0.25 }} 
                    className={`flexCenter ${css.exp}`} key={i}>
                        <div className={css.post}>
                            <h1 className='fw-bold'>{exp.place}</h1>
                            <p className='fw-bold'>{exp.tenure}</p>
                        </div>
                        <div className={css.role}>
                            <h1 className='fw-bold'>{exp.role}</h1>
                            <p>{exp.detail}</p>
                        </div>
                    </motion.div>
                );
               })}

            <motion.div 
            variants={zoomIn(1,1)}
            className={css.progressbar}>
                <div className={css.line}>
                    <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                    <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
                    <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
                </div>
            </motion.div>

            </div>
        </div>
    </motion.section>
  );
};

export default Work

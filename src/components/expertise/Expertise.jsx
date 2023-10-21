import { helpText, projectExperience } from "../../utils/data";
import css from "./Expertise.module.scss";
function Expertise() {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={`${css.leftSide}`}>
          {projectExperience.map((exp, i) => {
            return (
              <>
                <div className={css.exp} key={i}>
                  <div className="flexCenter" style={{background:exp.bg}}>
                    <exp.icon size={25} color="white" />
                  </div>

                  <div>
                    <span>{exp.name}</span>
                    <span>{exp.projects} Projects</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={css.rightSide}>
            <span className={css.p_Text}> What i do?</span>
                {
                    helpText.map((paragraph, i) => {
                        return(
                            <>
                            <span className={css.secondaryText} key={i}>{paragraph}</span>
                            </>
                        )
                    })
                }

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
        </div>
      </div>
    </section>
  );
}

export default Expertise;

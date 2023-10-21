import css from './Hero.module.scss';
import certificate from '/certificate.png';
import person from '/person.png';
function Hero() {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
            <div className={`${css.upperElements}`}>
                <span className='primaryText'>
                    Hey There, <br /> I&apos;m Emeka
                </span>
                <span className='secondaryText'>
                    I design beautiful simple things
                    <br />
                    And i love what i do
                </span>
            </div>

            <div className={css.person}>
                <img src={person} alt="" sizes="" srcSet="" />
            </div>
            
            <div className={`${css.lowerElements}`}>
                <div className={`${css.experience}`}>
                    <div className="primaryText">10</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </div>
                <div className={`${css.certificate}`}>
                    <img src={certificate} alt="certificate" srcSet={certificate} />
                    <span>CERTIFIED PROFESSIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero

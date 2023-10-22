import {useState} from "react";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow()
  
  
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`
    }
    style={{boxShadow: headerShadow}}
      >
        
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Chukwuemeke</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Expericence</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+2348139045472</p>
            <i className="bx svg bx-sm bx-phone-call"></i>
          </li>
        </ul>

        {/* this is only for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <i className="bx bx-md bx-menu-alt-right"></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

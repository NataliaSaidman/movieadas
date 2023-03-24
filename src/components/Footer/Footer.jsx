import style from "./Footer.module.css";

import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={style.authorsContainer}>
        <span className={style.contactAuthor}>
          Mica Lay <AiFillGithub className={style.iconsFooter} />
          <AiOutlineLinkedin className={style.iconsFooter} />
        </span>
        <span className={style.contactAuthor}>
          Nati Saidman <AiFillGithub className={style.iconsFooter} />
          <AiOutlineLinkedin className={style.iconsFooter} />
        </span>
      </div>
      <div className={style.copyrightContainer}>
        <span>
          <AiOutlineCopyrightCircle /> MicayNatiMedia, LLC.
        </span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export { Footer };

import s from "./Footer.module.css";

import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={s.authorsContainer}>
        <span className={s.contactAuthor}>
          Mica Lay <AiFillGithub className={s.iconsFooter} />
          <AiOutlineLinkedin className={s.iconsFooter} />
        </span>
        <span className={s.contactAuthor}>
          Nati Saidman <AiFillGithub className={s.iconsFooter} />
          <AiOutlineLinkedin className={s.iconsFooter} />
        </span>
      </div>
      <div className={s.copyrightContainer}>
        <span>
          <AiOutlineCopyrightCircle /> MicayNatiMedia, LLC.
        </span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export { Footer };

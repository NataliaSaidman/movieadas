import style from "./Footer.module.css";

import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className={style.authorsContainer}>
        <div className={style.contactAuthor}>
          <span>Micaela Lay</span>
          <div className={style.linksContainer}>
            <Link to="https://github.com/pyrolay" target="_blank">
              <AiFillGithub aria-label="GitHub icon" className={style.iconsFooter} />
            </Link>
            <Link to="https://www.linkedin.com/in/micaela-lay/" target="_blank">
              <AiOutlineLinkedin aria-label="LinkedIn icon" className={style.iconsFooter} />
            </Link>
          </div>
        </div>
        <div className={style.contactAuthor}>
          <span>Natalia Saidman</span>
          <div className={style.linksContainer}>
            <Link to="https://github.com/NataliaSaidman" target="_blank">
              <AiFillGithub aria-label="GitHub icon" className={style.iconsFooter} />
            </Link>
            <Link to="https://www.linkedin.com/in/natalia-saidman/" target="_blank">
              <AiOutlineLinkedin aria-label="LinkedIn icon" className={style.iconsFooter} />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.copyrightContainer}>
        <p>
          <AiOutlineCopyrightCircle /> MicayNatiMedia, LLC.
        </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export { Footer };

import Styles from './Contato.module.css'
import { GoMail } from "react-icons/go";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";


function Contato() {
  return (
    <>
    <section className={Styles.contatos}>
    <h2>Contato</h2>
    <h3>Entre em contato</h3>
    <p>Para que possamos conversar mais sobre</p>
    <div className={Styles.icones}>
      <a href ='kdcmkdcm@gmail.com' target='_blank' rel="noopener">
        <GoMail/>
      </a>
      <a href ='http://www.instagram.com/' target='_blank' rel="noopener">
      <BsInstagram/>
      </a>
      <a href ='http://www.youtube.com/' target='_blank' rel="noopener">
      <BsYoutube />
      </a>
      <a href ='http://www.github.com/' target='_blank' rel="noopener">
      <BsGithub />
      </a>
      <a href ='http://www.linkedin.com/' target='_blank' rel="noopener">
      <BsLinkedin />
      </a>
    </div>
    </section>
  </>
  )
}

export default Contato;

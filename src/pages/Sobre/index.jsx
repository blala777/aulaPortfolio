import Styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import react from './imagens/icon-react.svg'
import node from './imagens/icon-node.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar.jpg'

function Sobre() {
  return (
    <>
     <section className={Styles.sobre}>
      <div className={Styles.bio}>
      <img src={avatar} className={Styles.avatar}></img>

      <div className={Styles.bio}>
     <div className={Styles.textos}>
      <h2>Sobre</h2>
        <p>Sou 
          <span> Letícia Araujo</span><br/>
          <strong>Dev Full Stack</strong>
          <p>Trabalho com desenvolvimento web desde ontem </p>
        
        </p>
        </div>
      </div>
      </div>  

      <div className={Styles.techs}>
        <h3>Techs </h3>
        <div className={Styles.icones}>
        <img src={html}></img>
        <img src={css}></img>
        <img src={js}></img>
        <img src={react}></img>
        <img src={node}></img>
        <img src={sql}></img>
        </div>
      </div>
     </section> 
    </>
  )
}

export default Sobre
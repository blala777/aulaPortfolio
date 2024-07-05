import { Link } from "react-router-dom";
import Styles from "./Home.module.css"

function Home() {
  return (
    <>
      <section className={Styles.home}>
        <div className={Styles.apresentacao}>
          <p>
            Olá, sou <br />
            <span>Letícia Araujo</span> <br />
            Dev Full Stack
          </p>
          <Link to="/sobre" className={`${Styles.btn} ${Styles.btn_red}`}>Saiba mais sobre mim</Link> 
        </div>
                
        <figure>
          <img className={Styles.imgHome} src="/blue.svg" />
        </figure>
      </section>
    </>
  );
}

export default Home;

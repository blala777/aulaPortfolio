import Styles from "./Cards.module.css";
import { FaReact, FaJs, FaCss3, FaHtml5, FaArrowRight } from "react-icons/fa";

function Cards({name, description, html_url}) {
  return (
    <section className={Styles.cards}>
      <h3>{name}</h3>
      <p> {description} </p>
      <div className={Styles.cardsFooter}>
        <div className={Styles.cardsIcones}>
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
        </div>
        
        <a
        href={html_url} className={Styles.cardsBotao}
          target="_blank">
          <FaArrowRight />
          </a>
          
      </div>
    </section>
  );
}
export default Cards;

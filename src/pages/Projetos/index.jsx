import Cards from "../../components/Cards";
import Styles from "./Projetos.module.css";
import { useState, useEffect } from 'react'

function Projetos() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () =>{
    const response = await fetch ('https://api.github.com/users/blala777/repos')
   
    const data = await response.json();
    setRepositories(data) 

  }
  buscarRepositorios()

  }, [])


return(
  <section className={Styles.projetos}>
  <h2>Projetos</h2>

  { 
  repositories.length > 0 ?

  (
    <section className={Styles.lista}>
      {
      repositories.map((repo) => (
      <Cards
      key={repo.id}
      name={repo.name}
      description={repo.description}
      html_url={repo.html_url}
      />
  ))
}
    </section>
)


: (<p> não funcionou </p>)

}

  </section>



)
}




export default Projetos

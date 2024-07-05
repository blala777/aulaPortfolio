import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header(){

    return(

//a barra"/" no link é o padrão. e o link está transformando meu nome num link. que quando clicado, vai para o padrão 
        <header className={styles.header}>
            <Link to ="/"> 
        <span>LetíciaAraujo.dev</span> 
            </Link>
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="/sobre">Sobre</Link>
            <Link to ="/projetos">Projetos</Link>
            <Link to ="/contato">Contato</Link>
        </nav>
        </header>
        
    
    )


    


}

export default Header //permite que o arquivo seja exportado
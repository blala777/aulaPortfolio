import Styles from './Page404.module.css'

function Page404() {
  return (
    <>
      <h2 className={Styles.titulo2}>Algo de errado não está certo!</h2>
      <div className={Styles.textos}>
        <span className={Styles.texto_grande}> 404</span><br/>
        <strong className={Styles.texto_vermelho}> Página não localizada</strong>
      </div>
    </>
  );
}

export default Page404;

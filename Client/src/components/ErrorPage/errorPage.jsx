import solgritando from '../Imagenes/sol.webp'
import styles from './errorPage.module.css';

function ErrorPage() {
    return(
        <div className={styles.error}>
            <img className="imagen" src={solgritando} alt="error" />
            <p class="page_404__mainText">Error 404 Page</p>
            <p class="page_404__text">La página que estás buscando no existe!!</p>
        </div>

    )
}
    
export default ErrorPage;
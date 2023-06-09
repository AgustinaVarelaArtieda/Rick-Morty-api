import avatar from '../Imagenes/agus.png'

import styles from './about.module.css';

export default function About(){
    return(
        <div className={styles.about}>
            <h2>CARTA DE PRESENTACION</h2>
            <img className="imagen" src={avatar} alt="avatar" />
            <h3>Agustina Varela</h3>
            
        </div>
    )
}
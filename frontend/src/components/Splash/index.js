

import splash from '../../assets/images/Cellar3.jpg'
import styles from './Splash.module.css'

const Splash = () => {
    
    return (
        <>
            <div className={styles.background}>
                <img src={splash} alt='Cellar Image' className={styles.splashImg}></img>
            </div>
            <div className={styles.footerDiv}>
                <footer className={styles.footer}>
                    <ul className={styles.footerList}>
                        <li className={styles.liLink}>
                            {/* <a className={styles.a} href="https://linkedin.com/in/richard-supe"> */}
                                <i className="fab fa-linkedin"/>
                            {/* </a> */}
                        </li>
                        <li className={styles.liGit}>
                            {/* <a href="https://github.com/Rich-Supe"> */}
                            <i className="fab fa-github-square" ></i>
                            {/* </a> */}
                        </li>
                        <li className={styles.liTwit}>
                            {/* <a href="https://twitter.com/supe_richard"> */}
                            <i className="fab fa-twitter-square"></i>
                            {/* </a> */}
                        </li>
                        {/* <li className={styles.liPort}>
                            <i className="fas fa-grin-beam-sweat"></i>
                            Portfolio
                        </li> */}
                        <li className={styles.liInsta}>
                            {/* <a href="https://www.instagram.com/richardsupe/"> */}
                            <i className="fab fa-instagram"></i>
                            {/* </a> */}
                        </li>
                    </ul>
                </footer>
        </div>
        </>
    )
}

export default Splash
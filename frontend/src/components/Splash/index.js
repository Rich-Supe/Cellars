

import splash from '../../assets/images/Cellar3.jpg'
import styles from './Splash.module.css'

const Splash = () => {
    
    return (
        <>
            <div className={styles.background}>
                <img src={splash} alt='Cellar' className={styles.splashImg}></img>
            </div>
            <div className={styles.footerDiv}>
                <footer className={styles.footer}>
                    <ul className={styles.footerList}>
                        <li className={styles.liLink}>
                            <a className={styles.aLink} href="https://linkedin.com/in/richard-supe">
                                <i className="fab fa-linkedin"/>
                                {/* <p>Linked-in</p> */}
                            </a>
                        </li>
                        <li className={styles.liGit}>
                            <a className={styles.aGit} href="https://github.com/Rich-Supe">
                            <i className="fab fa-github-square"></i>
                            {/* Github */}
                            </a>
                        </li>
                        <li className={styles.liTwit}>
                            <a className={styles.aTwit} href="https://twitter.com/supe_richard">
                            <i className="fab fa-twitter-square"></i>
                            {/* Twitter */}
                            </a>
                        </li>
                        {/* <li className={styles.liPort}>
                            <i className="fas fa-grin-beam-sweat"></i>
                            Portfolio
                        </li> */}
                    </ul>
                </footer>
        </div>
        </>
    )
}

export default Splash
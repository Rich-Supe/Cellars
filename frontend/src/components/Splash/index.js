

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
                            {/* <button onClick={reRoute} className={styles.fakeBtn}> */}
                                <i className="fab fa-linkedin"></i>
                            {/* </button> */}
                        </li>
                        <li className={styles.liGit}>
                            <i className="fab fa-github-square" ></i>
                        </li>
                        <li className={styles.liTwit}>
                            <i className="fab fa-twitter-square"></i>
                        </li>
                        {/* <li className={styles.liPort}>
                            <i className="fas fa-grin-beam-sweat"></i>
                            Portfolio
                        </li> */}
                        <li className={styles.liInsta}>
                            <i className="fab fa-instagram"></i>
                        </li>
                    </ul>
                </footer>
        </div>
        </>
    )
}

export default Splash
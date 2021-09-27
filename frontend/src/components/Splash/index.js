

import splash from '../../assets/images/Cellar3.jpg'
import styles from './Splash.module.css'
import { FaAngellist } from 'react-icons/fa'
import { GiFullFolder } from 'react-icons/gi'

const Splash = () => {
    
    return (
        <div className={styles.page}>
            <div className={styles.background}>
                {/* <img src={splash} alt='Cellar' className={styles.splashImg}></img> */}
                {/* <div className={styles.background__signature}>
                    <div className={styles.background__signature_div}>
                        <p className={styles.background__signature_name}>Created By Rich Supe</p>
                    </div>
                </div> */}
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer__content}>
                    {/* <header>Rich Supe</header>
                    <p>Welcome to Cellars! Contact me here:</p> */}
                    <ul className={styles.footer__socials}>
                        <li className={styles.liLink}>
                            <a className={styles.aLink} target="_blank" href="https://linkedin.com/in/richard-supe">
                                <i className="fab fa-linkedin"/>
                            </a>
                        </li>
                        <li className={styles.liGit}>
                            <a className={styles.aGit} target="_blank" href="https://github.com/Rich-Supe">
                            <i className="fab fa-github-square"></i>
                            </a>
                        </li>
                        <li className={styles.liTwit}>
                            <a className={styles.aTwit} target="_blank" href="https://twitter.com/supe_richard">
                            <i className="fab fa-twitter-square"></i>
                            </a>
                        </li>
                        <li>
                            <a className={styles.liAngel} target="_blank" href="https://angel.co/u/rich-supe">
                                <FaAngellist className={styles.angelIcon}/>
                            </a>
                        </li>
                        <li className={styles.liLink}>
                            <a className={styles.aLink} target="_blank" href="https://richsupe.com/">
                                <GiFullFolder className={styles.portIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__bottom}>
                    <p>Website created and maintained by <span>Rich Supe</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Splash
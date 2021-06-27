

import styles from './ProfileLanding.module.css'

const ProfileLanding = ({user}) => {
    

    return (
        <div className={styles.page}>
            <div className={styles.profileLanding}>
                <header className={styles.profileLanding__header}>{user.username}'s Profile</header>
                <ul className={styles.profileLanding__list}>
                    <li>
                        <p className={styles.liL}>Account:</p>
                        <p className={styles.liN}>{user.username}</p>
                    </li>
                    <li>
                        <p className={styles.liL}>Email:</p>
                        <p className={styles.liN}>{user.email}</p>
                    </li>
                    <li>
                        <p className={styles.liL}>Name:</p>
                        <p className={styles.liN}>{user.name}</p>
                    </li>
                    {/* <li>
                        birthday: {user.birthday}
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default ProfileLanding;
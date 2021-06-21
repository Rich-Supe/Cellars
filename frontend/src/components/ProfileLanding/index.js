

import styles from './ProfileLanding.module.css'

const ProfileLanding = ({user}) => {
    

    return (
        <div className={styles.profileLanding}>
            <header className={styles.profileLanding__header}>{user.username}'s Profile</header>
            <ul className={styles.profileLanding__list}>
                <li>
                    Account: {user.username}
                </li>
                <li>
                    Email: {user.email}
                </li>
                <li>
                    Name: {user.name}
                </li>
                {/* <li>
                    birthday: {user.birthday}
                </li> */}
            </ul>
        </div>
    )
}

export default ProfileLanding;
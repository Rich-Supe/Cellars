

import styles from './ProfileLanding.module.css'

const ProfileLanding = ({user}) => {
    

    return (
        <div className={styles.profileLanding}>
            <ul>
                <li>
                    Account name: {user.username}
                </li>
                <li>
                    email: {user.email}
                </li>
                <li>
                    name: {user.name}
                </li>
                {/* <li>
                    birthday: {user.birthday}
                </li> */}
            </ul>
        </div>
    )
}

export default ProfileLanding;
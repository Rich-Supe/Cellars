

import styles from './ProfileLanding.module.css'

const ProfileLanding = ({user}) => {
    console.log(`profilelanding user:`, user)

    return (
        <div className={styles.profileLanding}>
            <header>{user.username}</header>
        </div>
    )
}

export default ProfileLanding;
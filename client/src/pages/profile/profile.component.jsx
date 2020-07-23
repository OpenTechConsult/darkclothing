import React from 'react';
import UserProfile from '../../components/user-profile/user-profile.component';
import UserList from '../../components/user-list/user-list.component';

const Profile = ({name, email}) => (
    <div className="App">
        <UserList />
        <UserProfile name={name} email={email} />
    </div>
);
export default Profile;
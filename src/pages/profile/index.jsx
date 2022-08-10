/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Avatar from '../../components/Avatar';
import { useUsers } from '../../contexts/UserContextProvider';
import './css/profile.css'


export default function ProfilePage() {

    const {userId} = useParams();
    const {getUser} = useUsers()
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => setUserProfile(getUser(userId)), [userId])
    
    return (
        <div className='app-main-container d-flex'>
        <div className='app-inner-container'>
            {userProfile ? <Profile user={userProfile} /> : 'loading...' }
        </div>
        <div className='app-inner-sidebar profile'>
            <div className="sidebar-content">
                hi
            </div>
        </div>
        </div>
    )
}


function Profile({user}){
    return(
        <div className='profile-container'>
            <div className='profile-header d-flex align-items-center'>
                <Avatar src={user.avatar} alt='' />
                <div className='text-content'>
                    <h1>{user.name}</h1>
                    {/* <h4>{user.academic.university}</h4> */}
                    <h4>{user.academic.college}</h4>
                </div>
            </div>
            <div className=''>
                profile content
            </div>
        </div>
    )
}
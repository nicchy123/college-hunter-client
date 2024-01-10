import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div className='flex justify-center items-center flex-col gap-5 my-10 min-h-[70vh]'>
        {user?.photoURL && <img className='rounded' src={user?.photoURL}/>}
        {user?.displayName && <span className='text-xl font-bold'>{user.displayName}</span>}
        {user?.email && <span className='text-xl font-bold'>{user.email}</span>}
    </div>
  )
}

export default Profile
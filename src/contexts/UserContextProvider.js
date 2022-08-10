import React, { useState, createContext, useContext, useEffect } from 'react'
import { useSocket } from './SocketContextProvider'
import axiosInstance from '../helpers/axiosInstance'



const usersApi = createContext()

export const useUsers = e => useContext(usersApi)

export default function UserContextProvider({children}) {
    const {socket} = useSocket()

    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const [users, setUsers] = useState([])
    const [activeUsers, setActiveUsers] = useState([])

    useEffect(() => {
      const fetchUsers = async() => {
        setLoading(true)
        try {
          const response = await axiosInstance('/users').then(res => res);
          if(response.status === 200){
            setUsers(response.data)
          }
        } catch (error) {
          setErrors(error?.response?.data)
          // console.log(error)
        } finally{
          setLoading(false)
        }
      }
      fetchUsers();
    }, []);


    //get active users
    useEffect(() => {
      if(!socket) return
      socket.on('active-users', users => setActiveUsers(users))

      return () => socket.off('active-users');
    }, [socket]);

    const getUser = id => {
      const singleUser = users.filter(user => user._id === id)[0]
      return singleUser ? singleUser : null
    }

    const values = {
      loading, 
      errors, 
      users, 
      activeUsers,
      getUser
    }

    return (
      <usersApi.Provider value={values}>
        {children}
      </usersApi.Provider>
    )
}




import React, { useState, createContext, useEffect, useContext} from 'react'
import axiosInstance from '../helpers/axiosInstance'



const profileContextApi = createContext()

export const useProfile = e => useContext(profileContextApi)

export default function ProfileContextProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const athenticateUser = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get('/auth', {
          signal:controller.signal
        }).then(res => res)
        isMounted && setProfile(response.data)
      } catch (error) {
        setErrors(error?.response?.data)
      } finally{
        setLoading(false)
      }
    }
    athenticateUser()
   return () => {
    isMounted = false;
    controller.abort();
   }
  }, [])

  const registerUser = async data => {
    setLoading(true)
    try {
      const response = await axiosInstance.post('/auth/register', data).then(res => res)
      setProfile(response.data)
    } catch (error) {
      console.dir(error)
    } finally{
      setLoading(false)
    }
  }
 
  const loginUser = async data => {
    setLoading(true)
    try {
      const response = await axiosInstance.post('/auth/login', data).then(res => res)
      setProfile(response.data)
    } catch (error) {
      setProfile(null)
      setErrors(error?.response?.data)
    } finally{
      setLoading(false)
    }
  }

  const values = {
    loading, 
    errors, 
    profile, 
    loginUser,
    registerUser,
    setProfile,
    setErrors,
    setLoading
  }

    return (
      <profileContextApi.Provider value={values}>
        {children}
      </profileContextApi.Provider>
    )
}





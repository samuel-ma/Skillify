import React, { useState, createContext, useContext, useEffect } from 'react'
import { useUsers } from './UserContextProvider';
import { useProfile } from './ProfileContextProvider';
import axiosInstance from '../helpers/axiosInstance'

const messagesApi = createContext()

export const useMessages = e => useContext(messagesApi)

export default function MessagesContextProvider({history, children}) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [messages, setMessages] = useState([]);

    const {users} = useUsers();
    const {profile} = useProfile()

    useEffect(() => {
      let isMounted = true
      const controller = new AbortController()
      const fetchMessages = async() => {
        setLoading(true)
        try {
          const response = await axiosInstance('/messages', {
            signal:controller.signal
          }).then(res => res);
         
          isMounted && setMessages(response.data)
        } catch (error) {
          setErrors(error?.response?.data)
        } finally{
          setLoading(false)
        }
      }
      fetchMessages();

      return () => {
        isMounted = false
        controller.abort()
      }
    }, []);


    const formatedChateMessages = (profile && messages.length >= 1) ? messages.map(conversation => {
      const members = conversation.members.map(member => {
        const user = users.find(user => user._id === member);
        let _id
        let me
        let name = member
        let avatar = '/images/user.png'
        if(user){
          _id = user._id
          me = user._id === profile._id
          name = user.name
          avatar = user.avatar
        }
        return {_id, me, name, avatar}
      });

      const formatedMessages = conversation.messages.map(message => {
        const contact = users.find(user => message.sender === user._id);
        let sender, avatar, fromMe
        if(contact){
          sender = contact.name
          avatar = contact.avatar
          fromMe = profile._id === message.sender
        }
        return {...message, sender, avatar,fromMe}
      })
      return {...conversation, messages:formatedMessages, members}
    }) : []

// console.log(formatedChateMessages)
    const values = {
      loading, 
      errors, 
      messages:formatedChateMessages
    }

    return (
      <messagesApi.Provider value={values}>
        {children}
      </messagesApi.Provider>
    )
}



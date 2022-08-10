import React, { useState, useEffect, createContext, useContext } from 'react'
import io from 'socket.io-client'
import { useProfile } from './ProfileContextProvider';


const socktApi = createContext();


export const useSocket = () => useContext(socktApi)

export default function SocketContextProvider({children}){
    const {profile} = useProfile()
    const [socket, setSocket] = useState();

    // connect user
    useEffect(() => {
        if(!profile) return
        console.log(profile)
        const newSocket = io('http://localhost:3002', {query:profile})
        setSocket(newSocket);
        return () => newSocket.close();
    }, [profile]);


    return(
        <socktApi.Provider value={{socket}}>
            {children}
        </socktApi.Provider>
    )
}
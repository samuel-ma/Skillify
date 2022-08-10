import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useProfile } from '../contexts/ProfileContextProvider';



export default function ProtectedRoutes({component:Component, ...rest}) {

  const { profile } = useProfile()

    return (
        <Route {...rest} render={({location}) => {
            return profile ? <Component /> : 
            <Redirect to={{
                pathname:'/login',
                state:{ from:location }
            }} />
        }} />
    )
}

export function AuthFormRoutes({component:Component, ...rest}) {

  const { profile } = useProfile()

    return (
        <Route {...rest} render={({location}) => {
            return !profile ? <Component /> : 
            <Redirect to={{
                pathname:'/'
            }} />
        }} />
    )
}

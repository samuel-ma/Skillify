import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Routes } from 'react-router-dom';
import SocketContextProvider from './contexts/SocketContextProvider'
import ProfileContextProvider from './contexts/ProfileContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import MessagesContextProvider from './contexts/MessagesContextProvider'
import App from './App';
import './style/style.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ProfileContextProvider>
          <SocketContextProvider>
            <UserContextProvider>
              <MessagesContextProvider>
                <App />
              </MessagesContextProvider>
            </UserContextProvider>
          </SocketContextProvider>
        </ProfileContextProvider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);



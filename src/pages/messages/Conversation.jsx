import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FaPaperPlane, FaVideo, FaPhoneAlt} from 'react-icons/fa'
import { useMessages } from '../../contexts/MessagesContextProvider';
import Avatar from '../../components/Avatar';
import RoundedIcon from '../../components/RoundedIcon';
import Messages from './'


export default function Conversation() {

  const {messages} = useMessages()
  const {conversationId} = useParams();
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    if(messages){
      const result = messages.filter(msg => msg?._id === conversationId);
      result.length >= 1 && setConversation(result[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  const chateMembers = conversation?.members?.filter(m => m.me !== true)


  return (
    <div className='app-main-container d-flex'>
      {conversation !== null && <div className='app-inner-container conversation-container d-flex flex-column'>
        <div className="conversation-header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {chateMembers?.map(member => (
              <div className="d-flex align-items-center" key={member._id}>
                <Avatar src={member.avatar} alt={member.name} />
              </div>
            ))}
            {chateMembers?.map(member => (
              <div className="mx-2" key={member._id}>
                <b>{member.name}</b>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center">
            <RoundedIcon icon={<FaPhoneAlt />} />
            <RoundedIcon icon={<FaVideo />} />
          </div>
        </div>
        <div className="conversation-messages-wraper flex-grow-1 overflow-auto">
          <div className="d-flex flex-column align-items-start justify-content-end">
            {conversation.messages.length >= 1 ? conversation.messages.map(conversation => 
              <div className={`message-card d-flex ${conversation.fromMe ? '' : 'align-self-end'}`} key={conversation._id}>
                {conversation.fromMe && <Avatar src={conversation.avatar} alt='' />}
                <div className={`message-text ${conversation.fromMe ? 'me' :''}`}>
                  <p>{conversation.text}</p>
                </div>
                {!conversation.fromMe && <Avatar src={conversation.avatar} alt='' />}
              </div>) :
              'Start conversation'
            }
          </div>
        </div>
        <div className="conversation-form">
          <form className='d-flex'>
            <textarea placeholder='Write message...'></textarea>
            <button><FaPaperPlane /></button>
          </form>
        </div>
      </div>}
      <div className="app-inner-sidebar">
        <Messages />
      </div>
    </div>
  )
}

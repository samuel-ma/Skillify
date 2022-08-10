import { useMessages } from "../../contexts/MessagesContextProvider";
import SearchBar from "../../components/SearchBar";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { Link } from "react-router-dom";
import './css/messages.css'

export default function MessagesPage() {

    const {loading, errors, messages} = useMessages();

    let messagesContent
    if(loading){
      messagesContent = 'Loading...'
    }else if(!loading && errors){
      messagesContent = 'error...'
    }
  
    if(messages.length >= 1){
      messagesContent = <DisplayMessages messages={messages} />
    }
  return (
    <div className='sidebar-content'>
      <SearchBar placeholder='Search people' />
      <h4>Messages</h4>
      <div className="mt-3">
        {messagesContent}
      </div>
    </div>
  )
}


function DisplayMessages({messages}){
    const {profile} = useProfile()
    return(
      <div className="">
        {messages.map(msg => {
          const member = msg.members.filter(user => user._id !== profile._id)
          return(
            <div className='list-item-card d-flex align-items-center' key={msg._id}>
              <div className="user-avatar">
                <img className="rounded-circle" src={member[0].avatar} alt='' />
              </div>
              <Link className="list-item-text" to={`/messages/conversation/${msg._id}`}>
                <h6>{member[0].name}</h6>
                <span className='small'>{msg?.messages[msg.messages.length - 1]?.text}</span>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
import Messages from '../messages'
import './css/main.css'


export default function Main() {
  return (
    <div className='app-main-container d-flex'>
      <div className='app-inner-container'>
        home
      </div>
      <div className="app-inner-sidebar">
        <Messages />
      </div>
    </div>
  )
}


import {Route, Routes} from 'react-router-dom'
import Home from './pages/main'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar';
import Conversation from './pages/messages/Conversation';
import Login from './pages/forms/Login';
import Profile from './pages/profile';


function App() {

  return (
    <>
    <div className='app-outer-wraper'>
      <Navbar />
      <div className='app-wraper d-flex'>
        <Sidebar />
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/users/profile/:userId' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/messages/conversation/:conversationId' element={<Conversation/>} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}


export default App;

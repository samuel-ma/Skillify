import {useState} from 'react'
import {FaLock, FaUserLock} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import { useProfile } from '../../contexts/ProfileContextProvider'


export default function Login() {
  
  const {loginUser} = useProfile()

  const [inputs, setInputs] = useState()

  const handleInputChange = e => setInputs({...inputs, [e.target.name]:e.target.value})

  const handleSubmit = e => {
    e.preventDefault()
    loginUser(inputs)
  }
  
  return (
    <div className='form-wraper d-flex align-items-center justify-content-center'>
      <div className="form-inner-container d-flex">
        <div className="form-content">
          <div className="text-center mb-3">
            <h4>Login</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container d-flex align-items-center">
              <div className='input-icon d-flex align-items-center'>
                <FaUserLock />
              </div>
              <input type='email' placeholder='Enter email' name='email' onChange={handleInputChange} />
            </div>
            <div className="input-container d-flex align-items-center">
              <div className='input-icon d-flex align-items-center'>
                <FaLock />
              </div>
              <input type='password' placeholder='Enter password' name='password' onChange={handleInputChange} />
            </div>
            <div className="mt-3">
              <button className='btn submit-btn' type='submit'>Login</button>
            </div>
            <div className="mt-3">
              Dont have an account <NavLink className='' to='/register'>Sign up</NavLink>
            </div>
          </form>
        </div>
        <div className="form-content">
          
        </div>
      </div>
    </div>
  )
}



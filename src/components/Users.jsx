import { Link } from 'react-router-dom'

export default function Users({users, cName = ''}) {
  return (
    <div>
      {users.map(user => (
        <Link className='list-item-card d-flex align-items-center' key={user._id} to={`/users/profile/${user._id}`}>
          <div className={`user-avatar ${cName}`}>
            <img className="rounded-circle" src={process.env.PUBLIC_URL+user.avatar} alt='' />
          </div>
          <div className="list-item-text">
            <h6>{user.name}</h6>
            <span className='small'>{user.academic.college}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

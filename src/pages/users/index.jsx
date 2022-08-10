
import SearchBar from "../../components/SearchBar";
import Users from "../../components/Users";
import { useUsers } from "../../contexts/UserContextProvider";

export default function UsersPage() {

  const {loading, errors, users} = useUsers()

  let usersContent, activeUsersContent
  if(!loading){
    usersContent = 'Loading...'
  }else if(loading && errors){
    usersContent = 'error occures'
  }
  if(users.length >= 1){
    activeUsersContent = <Users users={users} cName='active' />
    usersContent = <Users users={users} />
  }
  return (
    <div className='sidebar-content'>
        <SearchBar placeholder='Search people' />
        <h4>Friends</h4>
        <div className="mt-3">
            {activeUsersContent}
            {usersContent}
        </div>
    </div>
  )
}

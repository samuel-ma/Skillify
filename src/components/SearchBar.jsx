import {FaSearch} from 'react-icons/fa'

export default function SearchBar({placeholder}) {
  return (
    <div className="search-bar-container d-flex align-items-center">
        <input type="search" placeholder={placeholder} />
        <button><FaSearch /></button>
    </div>
  )
}

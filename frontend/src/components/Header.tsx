import { Link } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
const Header = () => {
  const { isLoggedIn } = useAppContext()
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="text-white hover:text-gray-300"
              >
                My bookings
              </Link>
              <Link to="/my-hotels" className="text-white hover:text-gray-300">
                My Hotels
              </Link>
              <button className="text-white hover:text-gray-300">
                Sign out
              </button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white flex items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}
export default Header

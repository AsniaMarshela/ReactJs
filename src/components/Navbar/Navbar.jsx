import { useId } from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-[#002F6C]">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-white font-bold text-xl">Asnia Bookstore</h1>
        <Link
          to="/"
          className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
        >
          Home
        </Link>
      </div>

      {/* Center Section */}
      <div className="flex flex-1 justify-center">
        <input
          type="text"
          className="text-black focus:text-black px-4 py-2 w-full max-w-[400px] rounded-md border border-[#E63946]"
          name="search"
          id={inputId}
          placeholder="Search product..."
          onChange={handleSearchInput}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={login}
              className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
            >
              Sign in
            </button>
            <Link
              className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            <Link
              className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
              to="/cart"
            >
              Cart
            </Link>
            <Link
              to="/orders"
              className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
            >
              My Orders
            </Link>
            <button
              onClick={logout}
              className="text-white hover:text-[#E63946] active:text-[#1D3557] text-lg"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">SaaS Factory</Link>
      <nav className="flex items-center space-x-4">
        <Link to="/feedback" className="hover:text-gray-300">Feedback</Link>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
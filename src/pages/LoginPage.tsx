import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const user = await signIn();
    if (user) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleSignIn}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
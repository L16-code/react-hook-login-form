import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { logout } from './store/authSlice';
import LoginForm from './components/LoginForm';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <div className="container">
          <h1>Welcome, {user}!</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TimeKeeping from '../pages/TimeKeeping';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import { useAuth } from '../hooks/auth';

const AppRoutes: React.FC = () => {
  const { user, token } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={user && token ? <Navigate to="/timeKeeping" replace /> : <SignIn />}
      />

      <Route
        path="/signup"
        element={user && token ? <Navigate to="/timeKeeping" replace /> : <SignUp />}
      />

      <Route
        path="/timeKeeping"
        element={user && token ? <TimeKeeping /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;

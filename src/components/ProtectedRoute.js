// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setRedirect(true);
    }
  }, [loading, user]);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

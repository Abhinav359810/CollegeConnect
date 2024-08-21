import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { getUserRole } from '../services/userService'; // Import the userService for role checking

function ProtectedRoute({ children, requiredRole }) {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = React.useState(null);

  // Fetch the user role from Firestore
  React.useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        try {
          const fetchedRole = await getUserRole(user.uid);
          setRole(fetchedRole);
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
    };

    fetchUserRole();
  }, [user]);

  if (loading) {
    // Show a loading indicator while checking authentication and role
    return <div>Loading...</div>;
  }

  if (!user || (requiredRole && role !== requiredRole)) {
    // Redirect to login if not authenticated or if role doesn't match
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

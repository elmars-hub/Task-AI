import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@clerk/clerk-react';

function AuthSyncPage() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, userId } = useAuth();

  useEffect(() => {
    if (isLoaded) return;

    if (!isSignedIn) {
      if (localStorage.getItem('clerkUserId')) {
        localStorage.removeItem('clerkUserId');
      }

      navigate('/');
    }

    if (isSignedIn) {
      localStorage.setItem('clerkUserId', userId);

      navigate('/app/today');
    }
  }, [isSignedIn, isLoaded, userId]);

  return <div>AuthSyncPage</div>;
}

export default AuthSyncPage;

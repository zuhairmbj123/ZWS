import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '../lib/api';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        await client.auth.login();
        window.location.href = '/';
      } catch (err: any) {
        console.error('Authentication error:', err);
        setError(err?.message || 'Authentication failed');
        // Redirect to error page after 2 seconds
        setTimeout(() => {
          navigate('/auth/error?msg=' + encodeURIComponent(error || 'Authentication failed'));
        }, 2000);
      }
    };

    handleAuth();
  }, [navigate, error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <>
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-600">{error}</p>
            <p className="text-sm text-gray-500 mt-2">Redirecting to error page...</p>
          </>
        ) : (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Processing authentication...</p>
          </>
        )}
      </div>
    </div>
  );
}
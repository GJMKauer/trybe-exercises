import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    global.alert('Not Found');
  }, []);

  return (
    <div>
      <p>Not Found</p>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;

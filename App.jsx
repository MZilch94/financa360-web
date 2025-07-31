
import React, { useEffect, useState } from 'react';
import { initGoogleAuth } from './services/googleAuth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initGoogleAuth((response) => {
      setUser(response.credential);
    });
  }, []);

  return (
    <div className="p-4 font-sans text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Finança360</h1>
      {!user ? (
        <div id="google-login"></div>
      ) : (
        <p>Bem-vindo! Login realizado com sucesso.</p>
      )}
    </div>
  );
}

export default App;

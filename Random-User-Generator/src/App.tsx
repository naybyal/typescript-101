import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <h1>Random User Generator</h1>
      <button onClick={fetchRandomUser}>Generate User</button>
      {user && (
        <div>
          <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <img src={user.picture.large} alt="User Picture" />
        </div>
      )}
    </div>
  );
};

export default App;

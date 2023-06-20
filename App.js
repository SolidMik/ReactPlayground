import React, { useState, useEffect } from 'react';
import './App.css';

const UserComponent = ({ surname, age, home }) => (
  <>
    <h1>Welcome!</h1>
    <h2>{surname}</h2>
    <h3>{age}</h3>
    <h3>{home}</h3>
  </>
);

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const userMap = {
    Mik: { surname: 'Solid', age: 26, home: 'Subotica' },
    Jon: { surname: 'Snow', age: 16, home: 'South' },
    Tim: { surname: 'Sloth', age: 36, home: 'CG' },
    Beth: { surname: 'Smith', age: 23, home: 'London' },
    Joy: { surname: 'Summer', age: 28}, home: 'Cornwall',
  };

  const setUser = (user) => {
    setUserData(userMap[user]);
  };

  useEffect(() => {
    setUser(inputValue);
  }, [inputValue]);

  return (
    <div className="App-header">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {userData && <UserComponent {...userData} />}
    </div>
  );
};

export default App;

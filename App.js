import React, { useState, useEffect } from 'react';
import './App.css';

const UserComponent = ({ name, surname, age, home }) => (
  <>
    <h1>Welcome, {name}!</h1>
    <h2>{surname}</h2>
    <h3>{age}</h3>
    <h3>{home}</h3>
  </>
);

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEnterPressed(true);
    }
  };

  const userMap = {
    Password1: { name: 'Miki', surname: 'Solid', age: 26, home: 'Subotica' },
    Password2: { name: 'Jon', surname: 'Snow', age: 16, home: 'South' },
    Password3: { name: 'Tim', surname: 'Sloth', age: 36, home: 'CG' },
    Password4: { name: 'Beth', surname: 'Smith', age: 23, home: 'London' },
    Password5: { name: 'Joy', surname: 'Summer', age: 28, home: 'Cornwall' },
  };

  const setUser = (user) => {
    setUserData(userMap[user]);
  };

  useEffect(() => {
    if (isEnterPressed) {
      setUser(inputValue);
      setIsEnterPressed(false);
    }
  }, [inputValue, isEnterPressed]);

  return (
    <div className="App-header">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {userData && <UserComponent {...userData} />}
    </div>
  );
};

export default App;

import './App.css';

const App = () => {

  const Hello = 'Hello';
  const name = "Mik";
  const isNameShowing = true;
  const User = () => {
    return(
      <>
      <h1>Name: Mik</h1>
      <h2>Age: 26</h2>
      </>
    )
  }

  return (
    <div className="App">
      <div className="App-header">
      <h1>{Hello}, {isNameShowing ? name : 'noname'}!</h1>
      {isNameShowing ? (
        <>
          <h1>Welcome</h1>
          <h3>is your name {name}?</h3>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>kaki</h2>
        </>
      )}

      {name ? (
          <User />
      ) : (
        <>
          <h2>No name entered</h2>
          <h3>enter name</h3>
        </>  
      )

      }
    </div>
    </div>
  );
}

export default App;

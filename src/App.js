import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h1>I love {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="potato" />
      <Food fav="kimchi" />
      <Food fav="pasta" />
      <Food fav="alcohol" />
    </div>
  );
}

export default App;

import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h1>I love {fav}</h1>;
}

const foodILike = ["kimchi", "potato", "pasta", "alcohol"];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(food => (
        <Food fav={food} />
      ))}
    </div>
  );
}

export default App;

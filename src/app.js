// App.js

import React from "react";
import NumberList from "./NumberList";

const App = () => {
  const urls = [
    "http://20.244.56.144/numbers/primes",
    "http://abc.com/fibo"
    // Add more URLs as needed
  ];

  return (
    <div className="App">
      <NumberList urls={urls} />
    </div>
  );
};

export default App;

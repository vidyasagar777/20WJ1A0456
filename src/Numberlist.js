// NumberList.js

import React, { useState, useEffect } from "react";
import NumberService from "./NumberService";

const NumberList = ({ urls }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const numbersFromUrls = await NumberService.getNumbersFromUrls(urls);
        setNumbers(numbersFromUrls);
      } catch (error) {
        console.error("Error fetching numbers:", error);
      }
    };

    fetchNumbers();
  }, [urls]);

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;

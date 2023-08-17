// NumberService.js

import axios from "axios";

const NumberService = {
  getNumbersFromUrls: async (urls) => {
    const response = await axios.get("/numbers", {
      params: { url: urls }
    });
    return response.data.numbers;
  }
};

export default NumberService;

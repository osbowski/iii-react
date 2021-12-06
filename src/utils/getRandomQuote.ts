import axios from "axios";

const getRandomQuote = async () => {
  const endpoint =
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
  try {
    const response = await axios.get(endpoint);
    const data = await response.data;
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    return randomQuote;
  } catch (error) {
    return undefined;
  }
};

export default getRandomQuote;
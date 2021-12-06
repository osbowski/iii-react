import { useEffect, useState } from "react";

const QuoteComponent = () => {
  interface quoteInterface {
    quote: string;
    author: string;
  }

  const [quote, setQuote] = useState<quoteInterface | undefined>();
  const [lastQuote, setLastQuote] = useState<quoteInterface | undefined>();

  const getNewQuote = async () => {
    if (quote !== undefined) {
      setLastQuote(quote);
    }
    const data = await getRandomQuote();
    const randomQuote = await data;
    setQuote(randomQuote);
  };

  const getLastQuote = () => {
    setQuote(lastQuote);
    setLastQuote(undefined)
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="section-container">
      <h2>Quote for you</h2>

      {quote === undefined ? (
        <p>Something gone wrong. Try again later</p>
      ) : (
        <div className="quote-container">
          <p className="quote">{quote.quote}</p>
          <p className="author">{quote.author}</p>
        </div>
      )}
      <div>
        <button onClick={getNewQuote}>Get new quote</button>
        <button className="outline" onClick={getLastQuote} disabled={lastQuote===undefined}>Back to last quote</button>
      </div>
    </div>
  );
};

export default QuoteComponent;

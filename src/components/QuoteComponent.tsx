const QuoteComponent = () => {


  return (
    <div className="section-container">
      <h2>Quote for you</h2>
        <div className="quote-container">
          <p className="quote">"THIS IS QUOTE"</p>
          <p className="author">Author of quote</p>
        </div>
      <div>
        <button>Get new quote</button>
        <button>Back to last quote</button>
      </div>
    </div>
  );
};

export default QuoteComponent;

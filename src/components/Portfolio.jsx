import "../Styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="perfect">
      <img
        className="portfolio-img"
        src="https://static.fabrik.io/public/fabrik/themes/photographer-tocuyo.jpg?auto=format&lossless=1&q=95&ixlib=csharp-3.2.2.0&s=2e3e13b5463a2db0446c8d338634479a"
        alt=""
      />
      <div className="portfolio">
        <h2>Create the perfect online portfolio</h2>
        <hr className="portfolio-hr" />
        <p>
          <b>Presenting</b> your work is the final step in your production
          workflow.{" "}
          <i>
            We ve worked closely with thousands of creatives to make sure Fabrik
          </i>
          shows off your work at its best. See how we do it:
        </p>
        <p>
          <b>What type of creative are you</b>?
        </p>
      </div>
    </div>
  );
}

export default Portfolio;

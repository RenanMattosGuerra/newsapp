import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../Components/News/news.css";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`
      );

      setHeadlines(data.articles);
    }

    FetchData();
  }, []);

  return (
    <section>
      <h2 className="home-heading">Home</h2>
      <div className="news-container">
        {headlines.length > 0 ? (
          <div className="news-wrapper">
            {headlines.map((item, index) => (
              <article key={index} className="news-item">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  <h3>{item.title}</h3>

                  <img
                    src={item.urlToImage}
                    alt={item.title || "News image"}
                    className="news-img"
                  ></img>
                  <p className="description">{item.description}</p>
                  <span>{item.source.name}</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="loading">
            <p>Loading...</p>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

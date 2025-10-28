import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../Components/News/news.css";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [headlines, setHeadlines] = useState([]);

  async function FetchData() {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}`
    );

    setHeadlines(data.articles);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <h2 className="home-heading">Home</h2>
      <div className="news-container">
        {headlines.length > 0 ? (
          <div className="news-wrapper">
            {headlines.map((item, index) => (
              <div key={index} className="news-item">
                <a href={item.url} target="_blank" className="news-link">
                  <h3>{item.title}</h3>

                  <img src={item.urlToImage} className="news-img"></img>
                  <p className="description">{item.description}</p>
                  <span>{item.source.name}</span>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">
            <p>Loading...</p>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

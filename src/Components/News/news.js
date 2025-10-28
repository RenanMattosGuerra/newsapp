import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./news.css";
import "./mediaquery.css";
import Title from "../Title/title";

const News = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    async function FetchData() {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${id}&apiKey=${apiKey}`
      );
      setNews(data.articles);
    }

    FetchData();
  }, [id]);

  return (
    <section className="news-container">
      <Title></Title>
      {news.length > 0 ? (
        <div className="news-wrapper">
          {news.map((item, url) => (
            <article key={url} className="news-item">
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
    </section>
  );
};

export default News;

import { useEffect, useState } from "react";

const API_NEWS = "https://6ab580ea24ee9d3caa1c7e38.mockapi.io/news";

const getImagePath = (image) => `/news/${image.split("/").pop()}`;

const formatDate = (date = 0) => {
    const text = date.toString();
    return `${text.slice(0, 2)} / ${text.slice(2, 4)} / ${text.slice(4)}`;
};

const NewsItem = ({ news, isMain }) => {
    return (
        <div className={isMain ? "news__item news__main" : "news__item"}>
            <div className="news__image">
                <img src={getImagePath(news.image)} alt="" />
            </div>
            <h5>{news.name}</h5>
            {isMain && <p>{news.title}</p>}
            <span>{formatDate(news.date)}</span>
        </div>
    );
}

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const response = await fetch(API_NEWS);
                if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
                setNews(await response.json());
            } catch (error) {
                console.error(error.message);
            }
        };
        loadNews();
    }, []);

    return (
        <section className="news" id="news">
            <div className="container">
                <h2 className="title reveal">Новости Континента</h2>
                <div className="news__blocks reveal">
                    {news.length > 0 && <NewsItem news={news[0]} isMain={news[0].main} />}
                    <div className="news__grid">
                        {news.slice(1, 5).map((item) => (
                            <NewsItem key={item.id} news={item} isMain={item.main} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;

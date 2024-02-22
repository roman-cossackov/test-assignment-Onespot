import { newsAPI } from "../../services/NewsService";
import NewsItem from "../NewsItem/NewsItem";

const News = () => {
	const { data: news } = newsAPI.useFetchNewsQuery("");

	return (
		<div>
			<ul style={{ listStyle: "none" }}>
				{news &&
					news.map((article) => (
						<li key={article.name}>
							<NewsItem article={article} />
						</li>
					))}
			</ul>
		</div>
	);
};

export default News;

import { newsAPI } from "../../services/NewsService";
import NewsItem from "../NewsItem/NewsItem";

const News = () => {
	const { data: news } = newsAPI.useFetchNewsQuery("");

	return (
		<div>
			<h1>NEWS</h1>
			<ul>
				{news &&
					news.map((iNews) => (
						<NewsItem key={iNews.name} iNews={iNews} />
					))}
			</ul>
		</div>
	);
};

export default News;

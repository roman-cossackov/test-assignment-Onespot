import { useParams } from "react-router-dom";
import { newsAPI } from "../services/NewsService";

import Header from "../components/Header/Header";

import styles from "./NewsItemPage.module.scss";
import Comment from "../components/Comment/Comment";
import NotFoundPage from "./NotFoundPage";

const NewsItemPage = () => {
	const { id } = useParams();
	const { data: newsItem } = newsAPI.useFetchNewsByIdQuery(Number(id));
	const { data: newsItemComments } = newsAPI.useFetchNewsCommentsByIdQuery(
		Number(id)
	);

	return newsItem ? (
		<>
			<Header />
			<div className={styles.newsItem}>
				<h1 className={styles.title}>{newsItem?.name}</h1>
				<div className={styles.textPreview}>
					{newsItem?.text.slice(0, 100)}...
				</div>
				<div className={styles.image}>
					<img
						src={`${newsItem?.image}?lock=${newsItem.id}`}
						alt="news-image"
					/>
				</div>
				<div className={styles.text}>{newsItem?.text}</div>
				<div>
					<h2 className={styles.commentsHeader}>Comments:</h2>
					{newsItemComments ? (
						newsItemComments.map((comment) => (
							<Comment key={comment.id} comment={comment} />
						))
					) : (
						<p className={styles.noComments}>
							There are no comments right now
						</p>
					)}
				</div>
			</div>
		</>
	) : (
		<NotFoundPage />
	);
};

export default NewsItemPage;

import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./NewsItem.module.scss";
import { INews } from "../../models/INews";
import { formatDate } from "../../lib/formatDate";
import eyeIcon from "../../assets/eye.svg";

interface NewsItemProps {
	article: INews;
}

const NewsItem: FC<NewsItemProps> = ({ article }) => {
	const date = new Date(article.createdAt);
	const formattedDate = formatDate(date);

	return (
		<Link to={`/${article.id}`}>
			<div className={styles.newsItem}>
				<div className={styles.newsItemContainer}>
					<div className={styles.textContainer}>
						<h2 className={styles.name}>{article.name}</h2>
						<div className={styles.text}>
							{article.text.slice(0, 200)}...
						</div>
						<div className={styles.viewsAndDateConainer}>
							<div className={styles.date}>{formattedDate}</div>
							<div className={styles.views}>
								<img src={eyeIcon} alt="eye-image" />
								{article.views}
							</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<div className={styles.image}>
							<img
								src={`${article.image}?lock=${article.id}`}
								alt="news-item-image"
							/>
						</div>
					</div>
				</div>
				<div className={styles.author}>{article.author}</div>
			</div>
		</Link>
	);
};

export default NewsItem;

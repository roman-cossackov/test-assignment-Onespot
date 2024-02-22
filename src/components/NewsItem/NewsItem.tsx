import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./NewsItem.module.scss";
import { INews } from "../../models/INews";
import { formatDate } from "../../lib/formatDate";

interface NewsItemProps {
	iNews: INews;
}

const NewsItem: FC<NewsItemProps> = ({ iNews }) => {
	const date = new Date(iNews.createdAt);
	const formattedDate = formatDate(date);

	return (
		<Link to={`/${iNews.id}`}>
			<div className={styles.newsItem}>
				<div className={styles.newsItemContainer}>
					<div className={styles.textContainer}>
						<h2 className={styles.name}>{iNews.name}</h2>
						<div className={styles.text}>
							{iNews.text.slice(0, 200)}...
						</div>
						<div className={styles.viewsAndDateConainer}>
							<div className={styles.date}>{formattedDate}</div>
							<div className={styles.views}>
								<img
									src="/src/assets/eye.svg"
									alt="eye-image"
								/>
								{iNews.views}
							</div>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<div className={styles.image}>
							<img src={iNews.image} alt="news-item-image" />
						</div>
					</div>
				</div>
				<div className={styles.author}>{iNews.author}</div>
			</div>
		</Link>
	);
};

export default NewsItem;

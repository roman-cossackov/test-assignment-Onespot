import { FC } from "react";

import styles from "./NewsItem.module.scss";
import { INews } from "../../models/INews";

interface NewsItemProps {
	iNews: INews;
}

const NewsItem: FC<NewsItemProps> = ({ iNews }) => {
	return (
		<div className={styles.newsItem}>
			<div className={styles.name}>{iNews.name}</div>
			<div className={styles.date}>
				{new Date(iNews.createdAt).getFullYear()}
			</div>
			<div className={styles.views}>{iNews.views}</div>
			<div className={styles.image}>
				<img src={iNews.image} alt="news-item-image" />
			</div>
			<div className={styles.author}>{iNews.author}</div>
			<div className={styles.text}>{iNews.text}</div>
		</div>
	);
};

export default NewsItem;

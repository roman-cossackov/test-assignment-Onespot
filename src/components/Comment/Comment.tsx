import { timeAgo } from "../../lib/timeAgo";
import { IComments } from "../../models/IComments";
import styles from "./Comments.module.scss";

interface CommentProps {
	comment: IComments;
}

const Comment = ({ comment }: CommentProps) => {
	const date = new Date(comment.createdAt);
	const formattedDate = timeAgo(date);

	return (
		<div className={styles.comment}>
			<div className={styles.avatar}>
				<img src={comment.avatar} alt="avatar-image" />
			</div>

			<div className={styles.textContainer}>
				<div className={styles.name}>{comment.author}</div>
				<div className={styles.date}>{formattedDate}</div>
				<div className={styles.text}>{comment.text}</div>
			</div>
		</div>
	);
};

export default Comment;

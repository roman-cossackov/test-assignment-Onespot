import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { formatDate } from "../../lib/formatDate";

const Header = () => {
	const curDate = new Date();
	const formattedDate = formatDate(curDate);

	return (
		<div className={styles.header}>
			<Link to="/">
				<h1 className={styles.title}>Onespot News</h1>
			</Link>

			<div className={styles.date}>{formattedDate}</div>
		</div>
	);
};

export default Header;

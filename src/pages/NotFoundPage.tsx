import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<>
			<div
				style={{
					margin: "10px 0",
					fontWeight: "600",
					fontSize: "2rem",
				}}
			>
				404 Not Found
			</div>
			<Link to={"/"}>
				<button>Return to homepage</button>
			</Link>
		</>
	);
};

export default NotFoundPage;

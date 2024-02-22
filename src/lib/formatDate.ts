export const formatDate = (date: Date): string => {
	const formattedDate = date.toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
};

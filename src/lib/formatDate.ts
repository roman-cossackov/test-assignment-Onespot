export const formatDate = (date: Date): string => {
	const monthsArray = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const formattedDate = `
    ${daysOfWeek[date.getDay() - 1]},
    ${monthsArray[date.getMonth()]}
    ${date.getDate()},
    ${date.getFullYear()}
    `;
	return formattedDate;
};

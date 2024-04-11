import { useEffect, useState } from "react";

export function useFetch(url) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setError(null);

		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => {
				console.log("Error fetching data", error.message);
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, error, setData };
}

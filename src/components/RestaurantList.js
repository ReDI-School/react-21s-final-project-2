import { useEffect, useState } from "react";

const apiUrl = "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function RestaurantList() {
	const [restaurantName, setRestaurantName] = useState([]);

	useEffect(() => {
		const getName = async () => {
			const response = await fetch(apiUrl);
			const data = await response.json();

			setRestaurantName(data.results);
		};
		getName();
	}, []);

	return (
		<div>
			<ul>
				{restaurantName.map((restaurant) => (
					<li key={restaurant.id}>{restaurant.name}</li>
				))}
			</ul>
		</div>
	);
}

import { useEffect, useState } from "react";

const apiUrl = "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function RestaurantList() {
	let [name, setName] = useState("");

	useEffect(() => {
		const getName = async () => {
			const response = await fetch(apiUrl);
			const data = await response.json();
			// const { name: _name } = data.results;
			// setName(_name);
			name = data.results[0].name;
			setName(name);
			console.log(name);
		};
		getName();
	});

	return (
		<div>
			<h1>{name}</h1>
		</div>
	);

	// const restaurantNames = name.map(({ name }) => name);

	// 	return (
	// 		<div>
	// 			<ul>
	// 				{restaurantNames.map((item) => (
	// 					<li>{item}</li>
	// 				))}
	// 			</ul>
	// 		</div>
	// 	);
}

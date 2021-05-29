import { useEffect, useState } from "react";

export default function RestaurantList() {
	const [name, setName] = useState("");

	useEffect(() => {
		const getName = async () => {
			const response = await fetch(
				`https://redi-final-restaurants.herokuapp.com/restaurants`
			);
			const data = await response.json();
			const { name: _name } = data;
			setName(_name);
			console.log(data);
		};
		getName();
	});

	return (
		<div className="App">
			<h1>{name}</h1>
		</div>
	);
}

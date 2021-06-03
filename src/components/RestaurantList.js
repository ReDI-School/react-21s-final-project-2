import { useEffect, useState } from "react";
import "./restaurantList.css";

const apiUrl = "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function RestaurantList() {
    const [restaurantName, setRestaurantName] = useState([]);

    useEffect(() => {
        const getName = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();

            setRestaurantName(data.results);
            console.log(data.results);
        };
        getName();
    }, []);

    return (
        <div className="pageContainer">
            <div className="restList">
                {restaurantName.map((restaurant) => (
                    <div className="listItem" key={restaurant.id}>
                        <img src={restaurant.photos[0].links[0]}></img>
                        <h1>{restaurant.name}</h1>
                        <p>Cuisine: {restaurant.cuisine}</p>
                        <p>
                            {restaurant.opening_hours.open_now ? (
                                <p className="open">Open</p>
                            ) : (
                                <p className="closed">Closed</p>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

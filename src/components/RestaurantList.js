import { useEffect, useState } from "react";
import RestFilter from "./RestFilter";
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
        <div className="outer-container">
            <RestFilter />
            <div className="pageContainer">
                <div className="restList">
                    {restaurantName.map((restaurant) => (
                        <div className="listItem" key={restaurant.id}>
                            <div className="img-content">
                                <img src={restaurant.photos[0].links[0]}></img>
                            </div>

                            <div className="text-content">
                                <h1>{restaurant.name}</h1>
                                <p className="cuisine">
                                    Cuisine: {restaurant.cuisine}
                                </p>
                                <p className="rest-address">
                                    {restaurant.formatted_address}
                                </p>
                                <div className="delivery">
                                    <p>Delivery:</p>{" "}
                                    {restaurant.delivery ? (
                                        <p className="status-positive">Yes</p>
                                    ) : (
                                        <p className="status-negative">No</p>
                                    )}
                                    <p>Pickup:</p>
                                    {restaurant.pickup ? (
                                        <p className="status-positive">Yes</p>
                                    ) : (
                                        <p className="status-negative">No</p>
                                    )}
                                </div>
                                <div className="open-close">
                                    {restaurant.opening_hours.open_now ? (
                                        <p className="status-positive">Open</p>
                                    ) : (
                                        <p className="status-negative">
                                            Closed
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import RestFilter from "./RestFilter";
import "./restaurantList.css";

const apiUrl = "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getName = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();

            setRestaurants(data.results);
            console.log(data.results);
        };
        getName();
    }, []);

    function filterRestaurants(
        restaurants,
        selectedCuisine,
        selectedType,
        isOpen,
    ) {
        return restaurants.filter((restaurant) => {
            if (selectedCuisine !== "") {
                return restaurant.cuisine === selectedCuisine;
            }
            if (selectedType === "delivery") {
                return restaurant.delivery;
            }
            if (selectedType === "pickup") {
                return restaurant.pickup;
            }
            if (isOpen) {
                return restaurant.opening_hours.open_now;
            }
            return true;
        });
    }

    return (
        <div className="outer-container">
            <RestFilter
                selectedCuisine={selectedCuisine}
                setSelectedCuisine={setSelectedCuisine}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className="pageContainer">
                <div className="restList">
                    {filterRestaurants(
                        restaurants,
                        selectedCuisine,
                        selectedType,
                        isOpen,
                    ).map((restaurant) => (
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

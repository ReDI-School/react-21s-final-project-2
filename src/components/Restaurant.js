import { useEffect, useState } from "react";


const apiRestaurant =
    "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function Restaurant() {
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {

        const getRestaurant = async () => {
            const response = await fetch(apiRestaurant);
            const data = await response.json();
            setRestaurantDetails(data.results);
            console.log(data.results);
        };
        getRestaurant();
    }, []);

    return (
        <div className="Container">
            {restaurantDetails.map((rest) => (
                <div className="RestaurantInfo" key={rest.id}>
                    <img src={rest.photos[0].links[0]} alt=""></img>
                    <h1>{rest.name}</h1>
                    <div className="restaurant-rating">{rest.rating}
                        {/* ... */}
                    </div>
                    <div className="restaurant-price-level">{rest.price_level}
                        {/* ... */}
                    </div>
                    <div className="restaurant-cuisine">
                        {rest.cuisine}
                    </div>
                    <p>Opening Hours
                        {rest.opening_hours.hours.open} ~
                        {rest.opening_hours.hours.close}
                    </p>
                    <p> Delievery
                        {rest.delivery ? "available" : "not available"}
                    </p>
                    <p>Pick Up
                        {rest.pickup ? "available" : "not available"}
                    </p>
                    <div className="contact">
                        <div className="restaurant-address">{rest.formatted_address}</div>
                        <div className="restaurant-phone">{rest.social.phone}</div>
                        <div className="restaurant-email">{rest.social.email}</div>
                    </div>
                </div>

            ))}
        </div>

    );

}


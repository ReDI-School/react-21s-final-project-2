import { useEffect, useState } from "react";
import "./restaurant.css";

const apiRestaurant =
    "https://redi-final-restaurants.herokuapp.com/restaurants";

export default function Restaurant(props) {
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const restaurantId = props.match.params.restaurantId;

    useEffect(() => {

        const getRestaurant = async () => {
            const response = await fetch(apiRestaurant);
            const data = await response.json();
            const selectedRestaurant = data.results.find(item => {
                if (item.id === restaurantId) {
                    return true;
                }
                return false;

            })
            setRestaurantDetails([selectedRestaurant]);
            console.log(selectedRestaurant);
        };
        getRestaurant();
    })
    console.log("props: ", props);
    return (
        <div className="Container">
            {restaurantDetails.map((rest) => (
                <div className="RestaurantInfo" key={rest.id}>
                    <div className="img-content">
                        <img src={rest.photos[0].links[0]} alt="restaurant-detail"></img>
                    </div>
                    <div className="text-content">
                        <h1>{rest.name}</h1>
                        <p className="restaurant-rating">{getRatingStar(rest.rating)}
                            {"  "}{rest.rating}/ 5
                        </p>

                        <p className="restaurant-price-level">{getPriceLevel(rest.price_level)}
                            {/* ... */}
                        </p>
                        <p className="restaurant-cuisine">
                            {rest.cuisine}
                        </p>
                        <p>Opening Hours{" "}
                            {rest.opening_hours.hours.open}  ~
                            {rest.opening_hours.hours.close}
                        </p>
                        <p> Delivery:{" "}</p>
                        {rest.delivery ? (
                            <p className="status-positive">Yes</p>
                        ) : (
                            <p className="status-negative">No</p>
                        )}
                        <p>Pick Up:{" "}</p>
                        {rest.pickup ? (
                            <p className="status-positive">Yes</p>
                        ) : (
                            <p className="status-negative">No</p>
                        )}


                        <p className="restaurant-address">{rest.formatted_address}</p>
                        <p className="restaurant-phone">{rest.social.phone}</p>
                        <p className="restaurant-email">{rest.social.email}</p>

                    </div>
                </div>

            ))}
        </div>

    );

}


const getRatingStar = (rating) => {
    if (rating <= 1.5) {
        return `⭐`;
    } else if (rating <= 2.5) {
        return `⭐⭐`;
    } else if (rating <= 2.6) {
        return `⭐⭐⭐`;
    } else if (rating <= 3.6) {
        return `⭐⭐⭐⭐`;
    } else if (rating <= 4.5) {
        return `⭐⭐⭐⭐`;
    } else {
        return `⭐⭐⭐⭐⭐`;
    }
};

const getPriceLevel = (price_level) => {
    if (price_level <= 1) {
        return `€`;
    } else if (price_level <= 2) {
        return `€€`;
    } else if (price_level <= 3) {
        return `€€€`;
    } else if (price_level <= 4) {
        return `€€€€`;
    } else {
        return `€€€€€`;
    }
};
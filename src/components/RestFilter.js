import react from "react";
import RestaurantList from "./RestaurantList";
import "./restaurantList.css";

export default function RestFilter() {
    return (
        <div>
            <select>
                <option>Show all</option>
                <option>Chinese</option>
                <option>Indian</option>
                <option>Italian</option>
                <option>Mexican</option>
                <option>Thai</option>
                <option>Turkish</option>
            </select>
        </div>
    );
}

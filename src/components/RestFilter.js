import react from "react";
import RestaurantList from "./RestaurantList";
import "./restFilter.css";

export default function RestFilter() {
    return (
        <div className="filters-container">
            <div className="filter-dropdown">
                <select className="cuisine-filter">
                    <option>Show all</option>
                    <option>Chinese</option>
                    <option>Indian</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Thai</option>
                    <option>Turkish</option>
                </select>
            </div>
            <div className="filter-dropdown">
                <select className="delivery-filter">
                    <option>Show all</option>
                    <option>Delivery</option>
                    <option>Pickup</option>
                </select>
            </div>
            <div className="filter-dropdown">
                <select className="open-filter">
                    <option>Show all</option>
                    <option>Open</option>
                    <option>Closed</option>
                </select>
            </div>
        </div>
    );
}

import React from "react";

import FilterComponent from "./FilterComponent";
import "./restFilter.css";

export default function RestFilter({
    selectedCuisine,
    setSelectedCuisine,
    selectedType,
    setSelectedType,
    isOpen,
    setIsOpen,
}) {
    return (
        <div className="filters-container">
            <FilterComponent
                title="Cuisine"
                main={
                    <select
                        className="cuisine-filter"
                        name="cuisine"
                        id="cuisine"
                        value={selectedCuisine}
                        onChange={(event) =>
                            setSelectedCuisine(event.target.value)
                        }
                    >
                        <option value="">Show all</option>
                        <option value="chinese">Chinese</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="thai">Thai</option>
                        <option value="turkish">Turkish</option>
                    </select>
                }
            />

            <FilterComponent
                title="Delivery"
                main={
                    <select
                        className="delivery-filter"
                        name="type"
                        id="type"
                        value={selectedType}
                        onChange={(event) =>
                            setSelectedType(event.target.value)
                        }
                    >
                        <option value="">Show all</option>
                        <option value="delivery">Delivery</option>
                        <option value="pickup">Pickup</option>
                    </select>
                }
            />

            <div className="open-checkbox">
                <label htmlFor="open">Open now:</label>
                <input
                    type="checkbox"
                    id="open"
                    name="open"
                    checked={isOpen}
                    onChange={() => setIsOpen(!isOpen)}
                />
            </div>
        </div>
    );
}

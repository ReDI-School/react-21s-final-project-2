import React from "react";
import "./restFilter.css";

const FilterItem = (props) => {
    return (
        <div className="filter-item">
            <p className="title">{props.title}:</p>
            <>{props.main}</>
        </div>
    );
};

export default FilterItem;

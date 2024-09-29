import React from "react";

function ProductDate(props){
    const month = props.date.toLocalString('en-US',{month: 'long'});
    const day = props.date.toLocalString('en-US',{day: '2-digit'});
    const year = props.getFullYear();

    return(
        <div className="product-date">
        <div className="product-month">{month}</div>
        <div className="product-day">{day}</div>
        <div className="product-year">{year}</div>
        </div>
    );
}
export default ProductDate;
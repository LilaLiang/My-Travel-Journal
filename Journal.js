import React from "react"

export default function Journal(props) {
    const { imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props

    return (
        <div className="journal-container">
            <img src={imageUrl} />
            <div className="content-container">
                <div className="location-container">
                    <i className="fa-solid fa-location-dot location-icon"></i>
                    <h3>{location}</h3>
                    <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <h4>{startDate} - {endDate}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
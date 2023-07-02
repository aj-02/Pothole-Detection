import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MapStyles.css";

const Map = () => {
    const mapContainerRef = useRef(null);
    const [longitude, setLongitude] = useState(28.7041);
    const [latitude, setLatitude] = useState(77.1025);
    const [zoom, setZoom] = useState(8);


    navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
        enableHighAccuracy: true,
    });

    function successPosition(position) {
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
    }

    function errorPosition() {
        setLongitude(28.7041)
        setLatitude(77.1025)
    }

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [latitude, longitude],
            zoom: zoom,
        });

        map.on("move", () => {
            setLongitude(map.getCenter().longitude);
            setLatitude(map.getCenter().latitude);
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []);


    return (
        <div>
            <div className="map__container" ref={mapContainerRef} />
        </div>
    );
};

export default Map;
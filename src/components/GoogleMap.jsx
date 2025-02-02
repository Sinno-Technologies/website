import { useEffect, useRef, useState } from "react";

const GoogleMap = () => {
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY_PROD;
  const mapId = import.meta.env.PUBLIC_GOOGLE_MAPS_ID;
  const mapRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const CONFIGURATION = {
    locations: [
      {
        title: "Sinno Technologies Limited",
        address1: "1800 Argyle St",
        address2: "Halifax, NS, Canada",
        coords: { lat: 44.6482241, lng: -63.5756162 },
      },
    ],
    mapOptions: {
      center: { lat: 44.6482241, lng: -63.5756162 },
      zoom: 15,
      mapId: mapId,
    },
    mapsApiKey: apiKey,
  };

  window.initializeMap = () => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    if (!mapRef.current) {
      console.warn("Map container is not yet available. Retrying...");
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, CONFIGURATION.mapOptions);

    const marker = new google.maps.Marker({
      position: CONFIGURATION.locations[0].coords,
      map: map,
      title: CONFIGURATION.locations[0].title,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px;">${CONFIGURATION.locations[0].title}</h3>
          <p style="margin: 0 0 4px 0;">${CONFIGURATION.locations[0].address1}</p>
          <p style="margin: 0;">${CONFIGURATION.locations[0].address2}</p>
        </div>
      `,
    });

    marker.addListener("click", () => infoWindow.open(map, marker));

    setIsLoading(false);
  };

  const loadGoogleMaps = () => {
    if (document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
      window.initializeMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&loading=async&callback=initializeMap`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      setError("Failed to load Google Maps");
      setIsLoading(false);
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    if (!apiKey || !mapId) {
      setError("API Key or Map ID is missing");
      setIsLoading(false);
      return;
    }

    loadGoogleMaps();
  }, [apiKey, mapId]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
      <div>
          {isLoading && (
              <div>Loading map...</div>
          )}
          <div
              ref={mapRef}
              style={{
                  width: "100%",
                      height: "400px",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
              }}
          >
          </div>
      </div>
  );
};

export default GoogleMap;


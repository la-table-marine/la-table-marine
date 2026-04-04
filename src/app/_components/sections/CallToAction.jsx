"use client";

import Data from "@data/sections/call-to-action.json";
import { useEffect, useRef, useState } from "react";

const CallToActionSection = () => {
    const mapRef = useRef(null);
    const [mapVisible, setMapVisible] = useState(false);

    useEffect(() => {
        if (!mapVisible) return;

        const loadMap = () => {
            const { lat, lng, zoom } = Data.map;

            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat, lng },
                zoom,
                styles: [
                    { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#c9a84c" }] },
                    { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a4a" }] },
                    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
                    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d1b2a" }] },
                    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1e1e3a" }] },
                ],
            });

            new window.google.maps.Marker({
                position: { lat, lng },
                map,
                title: "La Table Marine",
                icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#c9a84c",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 2,
                },
            });
        };

        if (window.google && window.google.maps) {
            loadMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
            script.async = true;
            script.defer = true;
            script.onload = loadMap;
            document.head.appendChild(script);
        }
    }, [mapVisible]);

    return (
        <>
            {/* call to action */}
            <div className="tst-call-to-action">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-5">
                            {/* text */}
                            <div className="tst-cta-frame">
                                <div className="tst-cta">
                                    <div className="tst-fade-up">
                                        <div
                                            className="tst-suptitle tst-suptitle-mobile-md-center tst-text-shadow tst-white-2 tst-mb-15"
                                            dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                                        />
                                    </div>
                                    <h2
                                        className="tst-white-2 tst-text-shadow tst-mb-30 tst-fade-up"
                                        dangerouslySetInnerHTML={{ __html: Data.title }}
                                    />
                                    <div className="tst-fade-up">
                                        <div
                                            className="tst-text tst-text-lg tst-text-shadow tst-white-2 tst-mb-30"
                                            dangerouslySetInnerHTML={{ __html: Data.description }}
                                        />
                                    </div>
                                    
                                    <a    href={Data.button.link}
                                        target="_blank"
                                        className="tst-btn tst-btn-lg tst-btn-shadow tst-fade-up"
                                    >
                                        <i className="fas fa-map-marker-alt tst-mr-10"></i>
                                        {Data.button.label}
                                    </a>
                                </div>
                            </div>
                            {/* text end */}
                        </div>

                        <div className="col-lg-7">
                            {/* map */}
                            <div
                                style={{
                                    width: "100%",
                                    height: "420px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    marginTop: "30px",
                                    border: "2px solid rgba(201, 168, 76, 0.3)",
                                    position: "relative",
                                }}
                                className="tst-fade-up"
                            >
                                {/* overlay */}
                                {!mapVisible && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(135deg, #0d1b2a 0%, #1a1a2e 100%)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            zIndex: 10,
                                            gap: "15px",
                                        }}
                                        onClick={() => setMapVisible(true)}
                                    >
                                        <i
                                            className="fas fa-map-marker-alt"
                                            style={{ fontSize: "48px", color: "#c9a84c" }}
                                        />
                                        <p style={{ color: "#ffffff", fontSize: "16px", margin: 0 }}>
                                            2, rue Pierre Curie, 78370 Plaisir
                                        </p>
                                        <button
                                            style={{
                                                background: "transparent",
                                                border: "2px solid #c9a84c",
                                                color: "#c9a84c",
                                                padding: "10px 25px",
                                                borderRadius: "6px",
                                                fontSize: "14px",
                                                cursor: "pointer",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Afficher la carte
                                        </button>
                                    </div>
                                )}
                                {/* overlay end */}

                                {/* map container */}
                                <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
                                {/* map container end */}

                            </div>
                            {/* map end */}
                        </div>

                    </div>
                </div>
            </div>
            {/* call to action end */}
        </>
    );
};

export default CallToActionSection;
import React, { useState, useEffect } from "react";
import work1 from '../assets/images/work-1.png';

function Work() {
    useEffect(() => {
        document.title = "Sudhanshu | Work";
    }, []);

    const [imageSrc, setImageSrc] = useState("");
    const [imageKey, setImageKey] = useState(0);
    const [zoomClass, setZoomClass] = useState("");

    const handleMouseEnter = (src) => {
        setImageSrc(src);
        setImageKey(prevKey => prevKey + 1);
        setZoomClass("zoom-in");
    };

    const handleMouseLeave = () => {
        setZoomClass("zoom-out");
        setTimeout(() => {
            setImageSrc("");
        }, 100);
    };

    return (
        <div className="scrollable-container">
            <div className="projects">
                <div className="projects-left">
                    <div className="project-img-wrapper">
                        {imageSrc && (
                            <img
                                key={imageKey}
                                className={`projects-image ${zoomClass}`}
                                src={imageSrc}
                                alt=""
                            />
                        )}
                    </div>
                </div>
                <div className="projects-right">
                    <div className="work">
                        <h2 className="work-title">Work</h2>
                        <h5 className="elements-number">1</h5>
                    </div>
                    <hr className="work-separator" />
                    <ul>
                        <li><a
                            href="https://github.com/champsudhu/WanderLust" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">WanderLust</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">MERN</p>
                                </div>
                            </div>
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="noise"></div>
        </div>
    );
}

export default Work;

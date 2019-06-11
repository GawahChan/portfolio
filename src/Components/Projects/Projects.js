import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects-container" id="Projects">
            <h1>My Projects</h1>
            <div className="Projects-list">
                <div className="Projects-item kodflix">
                    <a href="https://kodflix-gawah.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h1>Kodflix</h1>
                            {/* <p>A netflix inspired web app</p> */}
                            <div className="Projects-languages">
                                <i class="fab fa-react fa-2x" />
                                <i class="fab fa-node fa-2x" />
                                <i class="fab fa-js-square fa-2x" />
                                <i class="fab fa-html5 fa-2x" />
                                <i class="fab fa-css3 fa-2x" />
                                <i class="fab fa-git fa-2x" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="Projects-item alpha-props">
                    <a href="https://alpha-properties-app.appspot.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h1>Alpha-Properties</h1>
                            {/* <p>A mock real-estate agency website based on properties in London </p> */}
                            <div className="Projects-languages">
                                <i class="fab fa-react fa-2x" />
                                <i class="fab fa-node fa-2x" />
                                <i class="fab fa-js-square fa-2x" />
                                <i class="fab fa-html5 fa-2x" />
                                <i class="fab fa-css3 fa-2x" />
                                <i class="fab fa-git fa-2x" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="Projects-item other-projects">
                    <a href="https://github.com/GawahChan" target="_blank" rel="noopener noreferrer">
                        <div className="Overlay">
                            <h1>Other Projects</h1>
                            <i class="fab fa-github fa-2x" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
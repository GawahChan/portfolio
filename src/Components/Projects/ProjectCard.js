import React from 'react';
import { ProjectCardContainer } from './styled';
import ProjectCardOverlay from './ProjectCardOverlay';

function ProjectCard({ project }) {
    return (
        <ProjectCardContainer
            img={project.img}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ProjectCardOverlay project={project} />
        </ProjectCardContainer>
    );
}

export default ProjectCard;
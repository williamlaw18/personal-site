import React from 'react';

import '../styles/components/card.scss';

const ProjectCard = ({project}) => {

    return (
        <section className="project card">
            <h2>{project.title}</h2>
        </section>
    )
}

export default ProjectCard
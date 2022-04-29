import React from 'react';

import '../styles/components/card.scss';

const ProjectCard = ({project}) => {

    return (
        <section className="projectCard card">
            <div className="card__content">
                <div className="card__content-inner">
                    <h2>{project.title}</h2>
                    <h3>{project.subTitle}</h3>
                </div>
            </div>
            <img className="card__img" src={project.thumbImage.fields.file.url}/>
        </section>
    )
}

export default ProjectCard
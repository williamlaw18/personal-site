import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/card.scss';

const ProjectCard = ({project}) => {

    return (
        <Link className="projectCard card" to={`${project.url}`}>
            <div className="card__content">
                <div className="card__content-inner">
                    <h2>{project.title}</h2>
                    <h3>{project.subTitle}</h3>
                </div>
            </div>
            <img className="card__img" src={project.thumbImage.fields.file.url}/>
        </Link>
    )
}

export default ProjectCard
import React from 'react';

const ExperienceCard = ({experience}) => {


    return (
        <section className="experience card">
            <h2>{experience.title}</h2>
            <h3>{experience.subTitle}</h3>
        </section>
    )
}

export default ExperienceCard
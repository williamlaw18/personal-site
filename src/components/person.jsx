import React from 'react';

const PersonCard = ({person}) => {

    return (
        <section className="person">
            <h2>{person.name}</h2>
        </section>
    )
}

export default PersonCard
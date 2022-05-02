import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/card.scss';

const Card = ({card, loading, width}) => {

    return (
        <Link className={`projectCard card loading-${loading} ${width}`} to={`${card.url}`} >
            <div className="card__content">
                <div className="card__content-inner">
                    <h3>{card.title}</h3>
                    <h4>{card.subTitle}</h4>
                </div>
            </div>
            <img className="card__img" src={card.thumbImage.fields.file.url}/>
        </Link>
    )
}

export default Card
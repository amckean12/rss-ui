//Libraries
import React from 'react';

const OverviewStatComponent = (props) => {
    return(
        <div className={`text-center ${props.block}__overview-stat-container  ${props.block}__overview-stat-container--${props.modifier}`}>
            <h2 className="profile__overview-stat-heading">{props.title}</h2>
            <h3 className="profile__overview-stat-value">{props.content}</h3>
        </div>
    )
}


export default OverviewStatComponent
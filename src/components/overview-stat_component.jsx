//Libraries
import React from 'react';

const OverviewStatComponent = (props) => {
    return(
        <div className={`profile__overview-stat profile__overview-stat--${props.element} profile__overview-stat-value--${props.modifier}`}>
            <h3 className="profile__overview-stat-heading">{props.title}</h3>
            <p className={`profile__overview-stat-value profile__overview-stat-value--${props.modifier}`}>{props.content}</p>
        </div>
    )
}


export default OverviewStatComponent
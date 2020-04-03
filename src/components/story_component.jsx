//Libraries
import React from 'react';

const StoryComponent = (props) => {
    return(
        <section className={`${props.block}__story-section`}>
            {props.image && 
                <img src={props.story.img_src} alt={props.story.img_alt}></img>
            }
            <h3 className={`${props.block}__story-title`}>
                <a className={`${props.block}__story-link`} href={props.story.article_link} target="_blank" rel="noopener noreferrer">
                    {props.story.title}
                </a>
            </h3>
            <p className={`${props.block}__story-published-date`}>
                { props.story.display_date }
            </p>
            <p className={`${props.block}__story-description`}>
                {props.story.description}
            </p>
        </section>
    )
}


export default StoryComponent

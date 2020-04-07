//Libraries
import React from 'react';

const StoryComponent = (props) => {
    return(
        <section className={`${props.block}__rss-story-section`}>
            {props.story.image===true ? 
            <img className={`img-fluid ${props.block}__rss-story-img`} src={props.story.img_src} alt={props.story.img_alt}></img> : '' }
            <h3 className={`${props.block}__rss-story-title`}>
                <a className={`${props.block}__story-link`} href={props.story.article_link} target="_blank" rel="noopener noreferrer">
                    {props.story.title}
                </a>
            </h3>
            <time className={`${props.block}__rss-story-published-date`}>
                { props.story.display_date }
            </time>
            <p className={`${props.block}__rss-story-description`}>
                {props.story.description}
            </p>
        </section>
    )
}


export default StoryComponent

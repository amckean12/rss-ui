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
            <p>
                { props.story.published_date }
            </p>
            <p>
                {props.story.description}
            </p>
        </section>
    )
}


export default StoryComponent

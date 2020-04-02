//Libraries
import React from 'react';

const StoryComponent = (props) => {
    return(
        <section className={`${props.block}__story-section`}>
            <h3 className={`${props.block}__story-title`}>
                <a className={`${props.block}__story-link`} href={`https://www.google.com`} target="_blank">
                    Hello World
                </a>
            </h3>
        </section>
    )
}


export default StoryComponent

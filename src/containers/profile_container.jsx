// Libraries
import React, { Component } from 'react';

// Components
import StoryComponent from '../components/story_component.jsx'
import OverviewStatComponent from '../components/overview-stat_component.jsx'

// Stylesheets
import '../styles/components/profile.scss'

class ProfileContainer extends Component {
    renderStories() {
        return this.props.data.article_history.map( story => {
            return(<StoryComponent block="profile" story={story}/>)
        })
    }

    // Sorts stories based on arguement given from onClick event
    sortStoriesArray(order_type){
        let sorted_stories = ""
        if(order_type === 'date'){
            sorted_stories = this.props.data.article_history.sort((a, b) => {
                if(a.display_date < b.display_date) { return -1; }
                if(a.display_date > b.display_date) { return 1; }
                return 0;
            })
        } else if (order_type === 'title') {
            sorted_stories = this.props.data.article_history.sort((a, b) => {
                    if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
                    if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
                    return 0;
                })
        } else if (order_type === 'description') {
            sorted_stories = this.props.data.article_history.sort((a, b) => {
                if(a.description.toLowerCase() < b.description.toLowerCase()) { return -1; }
                if(a.description.toLowerCase() > b.description.toLowerCase()) { return 1; }
                return 0;
            })
        } else {
            return
        }
        this.setState({
            article_history: sorted_stories
        })
    }
 
    render(){
        return(
            <main className="container profile">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 pr-md-0 profile__overview-container">
                            <OverviewStatComponent
                                block={'profile'} 
                                element={'article-count'}
                                title={'Total Articles'}
                                modifier={'orange'}
                                content={this.props.data.article_count} />
                            <OverviewStatComponent
                                block={'profile'}  
                                element={'article-count'}
                                title={'Total Articles Img'}
                                modifier={'light-blue'}
                                content={this.props.data.article_count_img} />
                            <OverviewStatComponent
                                block={'profile'}
                                element={'article-count'}
                                title={'Earliest Published Date'}
                                modifier={'aqua'}
                                content={this.props.data.oldest_article.display_date} />
                            <OverviewStatComponent
                                block={'profile'} 
                                element={'article-count'}
                                title={'Latest Published Date'}
                                modifier={'dark-blue'}
                                content={this.props.data.newest_article.display_date} />
                        </div>
                        <div className="col-md-9 col-sm-12 profile__rss-feed-container">
                            <div className="profile__rss-feed-toolbar">
                                <div class="btn-group">
                                    <button type="button" class="btn dropdown-toggle profile__rss-toolbar-sort-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button" onClick={() => this.sortStoriesArray('title')}>Title</button>
                                        <button class="dropdown-item" type="button" onClick={() => this.sortStoriesArray('date')}>Published Date</button>
                                        <button class="dropdown-item" type="button" onClick={() => this.sortStoriesArray('description')}>Description</button>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__rss-feed-list">
                                { this.renderStories() }
                            </div>
                        </div> 
                    </div>  
            </main>
        );
    }
}

export default ProfileContainer
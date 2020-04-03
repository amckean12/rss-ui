import React, { Component } from 'react';

// Stylesheets
import '../styles/components/profile.scss'

// Components
import StoryComponent from '../components/story_component.jsx'
import OverviewStatComponent from '../components/overview-stat_component.jsx'

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: "",
            article_count: "",
            article_count_img: "",
            oldest_article: "",
            newest_article: "",
            article_history: [
                {
                    id: 1,
                    title: "This is Article",
                    article_link: "https://www.google.com/",
                    published_date: "2020-03-30T16:10:00.000Z",
                    description: "sed do eiusmod tempor incididunt",
                    image: true,
                    img_src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUqQrbWEDNrc/v0/800x600.jpg",
                    img_alt: "Health Image", 
                }
            ]
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/users/1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result.user_data,
                        article_count: result.article_count,
                        article_count_img: result.article_count_img,
                        oldest_article: result.oldest_article,
                        newest_article: result.newest_article,
                        article_history: result.article_history,
                    });
                },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    renderStories() {
        return this.state.article_history.map( story => {
            return(<StoryComponent block="profile" story={story}/>)
        })
    }

    // Sorts stories based on arguement given from onClick event
    sortStoriesArray(order_type){
        let sorted_stories = ""
        if(order_type === 'date'){
            sorted_stories = this.state.article_history.sort((a, b) => {
                //Still Doesnt Work
            })
        } else if (order_type === 'title') {
            sorted_stories = this.state.article_history.sort((a, b) => {
                    if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
                    if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
                    return 0;
                })
        } else if (order_type === 'description') {
            sorted_stories = this.state.article_history.sort((a, b) => {
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
            <section className="profile row">
                <div className="col-md-3 col-sm-12 profile__overview-container">
                    <OverviewStatComponent 
                        element={'article-count'}
                        title={'Newest Article'}
                        content={this.state.article_count}/>
                    <OverviewStatComponent 
                        element={'article-count'}
                        title={'Newest Article'}
                        content={this.state.article_count_img}/>
                    <OverviewStatComponent 
                        element={'article-count'}
                        title={'Newest Article'}
                        content={this.state.oldest_article.title}/>
                    <OverviewStatComponent 
                        element={'article-count'}
                        title={'Newest Article'}
                        content={this.state.newest_article.title}/>
                </div> 
                <div className="col-md-9 col-sm-12 profile__rss-feed-container">
                    <div className="profile__rss-feed">
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
            </section>
        );
    }
}

export default ProfileContainer
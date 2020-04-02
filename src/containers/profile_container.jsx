import React, { Component } from 'react';

// Stylesheets
import '../styles/components/profile.scss'

// Components
import StoryComponent from '../components/story_component.jsx'

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
                        article_history: result.article_history
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

    componentDidUpdate() {
        return(this.renderStories())
    }

    renderStories() {
        return this.state.article_history.map( story => {
            return(<StoryComponent block="profile" story={story}/>)
        })
    }
    

    render(){
        return(
            <section className="profile row">
                <div className="col-md-3 col-sm-12 profile__overview-container">
                    <div className="profile__overview-stat profile__overview-stat--article-count">
                        <h3 className="profile__overview-stat-heading">Total Artices</h3>
                        <p className="profile__overview-stat-value">{this.state.article_count}</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--article-img-count">
                        <h3 className="profile__overview-stat-heading">Artices With Image</h3>
                        <p className="profile__overview-stat-value">{this.state.article_count_img}</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--oldest-article">
                        <h3 className="profile__overview-stat-heading">Oldest Article</h3>
                        <p className="profile__overview-stat-value">{this.state.oldest_article.title}</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--newest-article">
                        <h3 className="profile__overview-stat-heading">Newest Article</h3>
                        <p className="profile__overview-stat-value">{this.state.newest_article.title}</p>
                    </div>
                </div> 
                <div className="col-md-9 col-sm-12 profile__rss-feed-container">
                    <div className="profile__rss-feed">
                        <div className="profile__rss-feed-toolbar">
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Order By</button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                        <div className="profile__rss-feed-list">
                            {this.componentDidUpdate()}
                        </div>
                    </div> 
                </div> 
            </section>
        );
    }
}

export default ProfileContainer
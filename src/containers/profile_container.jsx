import React, { Component } from 'react';

// Stylesheets
import '../styles/components/profile.scss'

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
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

    render(){
        return(
            <section className="profile row">
                <div className="col-md-3 col-sm-12 profile__overview-container">
                    <div className="profile__overview-stat profile__overview-stat--article-count">
                        <h3 className="profile__overview-stat-heading">Total Artices</h3>
                        <p className="profile__overview-stat-value">10</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--article-img-count">
                        <h3 className="profile__overview-stat-heading">Artices With Image</h3>
                        <p className="profile__overview-stat-value">5</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--oldest-article">
                        <h3 className="profile__overview-stat-heading">Oldest Article</h3>
                        <p className="profile__overview-stat-value">Oldest Article</p>
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--newest-article">
                        <h3 className="profile__overview-stat-heading">Newest Article</h3>
                        <p className="profile__overview-stat-value">Oldest Article</p>
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
                    </div> 
                </div> 
            </section>
        );
    }
}

export default ProfileContainer
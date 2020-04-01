import React, { Component } from 'react';

// Stylesheets
import '../styles/components/profile.scss'

class ProfileContainer extends Component {
    render(){
        return(
            <section className="profile row">
                <div className="col-md-3 col-sm-12 profile__overview-container">
                    <div className="profile__overview-stat profile__overview-stat--article-count">
                        
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--article-img-count">
                    
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--oldest-article">
                    
                    </div>
                    <div className="profile__overview-stat profile__overview-stat--newest-article">
                    
                    </div>
                </div> 
                <div className="col-md-9 col-sm-12 profile__rss-feed-container">
                    <div className="profile__rss-feed">
                    </div> 
                </div> 
            </section>
        );
    }
}

export default ProfileContainer
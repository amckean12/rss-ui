import React, { Component } from 'react';
import axios from 'axios';

//Container
import ProfileContainer from './profile_container.jsx';

//Components
import HeaderComponent from '../components/header_component.jsx';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    display_date: '',
                }
            ]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/show', {
            params: {
                username: localStorage.username
            }
        })
        .then(result => {
            this.setState({
                user: result.data.user_data,
                article_count: result.data.article_count,
                article_count_img: result.data.article_count_img,
                oldest_article: result.data.oldest_article,
                newest_article: result.data.newest_article,
                article_history: result.data.article_history,
            });
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <HeaderComponent 
                    user={this.state.user}
                />
                <ProfileContainer
                    data={this.state} 
                />
            </div>
        );
    }
}

export default MainContainer
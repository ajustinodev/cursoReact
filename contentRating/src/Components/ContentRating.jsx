
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>Tópico sobre el que puedas dar tu opinión.</p>
     </div>
     <div className='rating-buttons'>
      <button className='like-buton' onClick={this.state.handleLike}> Like ({this.state.likes})</button>
      <button className='dislike-buton' onClick={this.state.handleDislike}> Dislike ({this.state.dislikes})</button>
      <h1>{this.state.totalRatings}</h1>
     </div>
     </>
    );

  }
}

export default ContentRating;
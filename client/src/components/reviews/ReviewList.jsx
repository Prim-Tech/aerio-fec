import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx'
import KeywordSearch from './KeywordSearch.jsx'
import SortOptions from './SortOptions.jsx'

const ReviewsList = ( { reviews, sortReviews, updateReviews }) => {

  /*  This Component will:
      1) Render each reviewTile from reviews state
      2) Figure out what to do when More Reviews is clicked
      3) Render a popup overlay when  Add Review is clicked and render NewReview
   */

      //onclick of more reviews, needs to send a new axios request to request the next page of reviews, when the result returns an empty aray, hide the reviews

  //on component mount, make a get request for more reviews
    //if it does not return empty
      //then add more reviews to the state in Reviews
    //if it is empty
      //hide the button
  const [currentReviews, setCurrentReviews] = useState([]);
  const [maxReviews, setMaxReviews] = useState(2);
  const [showMoreButton, setShowMoreButton] = useState(false)

  const updateCurrentReviews = (reviews) => {
    var reviewsHolder = []
    for (let i = 0; i < maxReviews; i ++) {
      if (reviews[i]) {
        reviewsHolder.push(reviews[i]);
      }
    }
    setCurrentReviews(reviewsHolder);
  }
  const updateShowMoreButton = () => {
    if (reviews.length !== 0) {
      setShowMoreButton(true);
    }
  }
  const addReviews = (e) => {
    e.preventDefault();
    setMaxReviews(maxReviews + 2)

  }

  useEffect(() => {
    updateCurrentReviews(reviews);
    updateShowMoreButton()
  }, [])

  useEffect(() => {
    updateCurrentReviews(reviews)
    if (maxReviews >= reviews.length) {
      setShowMoreButton(false);
    }
  }, [maxReviews])

  useEffect(() => {
    updateCurrentReviews(reviews)
  }, [reviews])


  return (
    <div style={{border: '5px solid blue',}}>
      ReviewsList!
      <SortOptions sortReviews={sortReviews}/>
      <KeywordSearch />
      <div style={{maxHeight: '450px', overflowY: 'auto'}}>
        {currentReviews.map((review) => {
          return (
            <ReviewTile key={review.review_id} review={review} updateReviews={updateReviews}/>
          )
        })}
      </div>
      {showMoreButton ? <button onClick={addReviews}>More Reviews</button>  : null}
      <button>Add Review</button>
    </div>
  )
}

export default ReviewsList;
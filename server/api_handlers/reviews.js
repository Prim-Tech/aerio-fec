const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

const getReviews = (req, res) => {
  var queryParams = req.query;
  // console.log('---------queryParams---------', queryParams)
  return axios.get(`${APIHostURL}/reviews`, {
    headers: {
      Authorization: APIKey
    },
    params: {
      page: queryParams.page,
      count: queryParams.count,
      sort: queryParams.sort,
      product_id: queryParams.product_id
    }
  });
}


const getReviewsMeta = (req, res) => {
  var queryParams = req.query;
  return axios.get(`${APIHostURL}/reviews/meta`, {
    headers: {
      Authorization: APIKey
    },
    params: {
      product_id: queryParams.product_id
    }
  });
}

//EXAMPLE DATA
  var exampleCharacteristics = {
    "240582": 5,
    "240583": 4,
    "240584": 3,
    "240585": 2
  }
  var exampleData = {
    product_id: 1,
    rating: 5,
    summary: "AAAAAAAAAAAAAAAAAA BEST PRODUCT EVER",
    "body": "I would reccomend this to everyone.",
    recommend: true,
    name: "Bob Bobson",
    email: "bobbybobson@bob.com",
    photos: ["https://ibb.co/KzLRDLw"],
    characteristics: exampleCharacteristics
  }

const postReview = (req, res) => {
  var requestBody = req.body;
  return axios.post(`${APIHostURL}/reviews`,
    {
      product_id: requestBody.product_id,
      rating: requestBody.rating,
      summary: requestBody.summary,
      body: requestBody.body,
      recommend: requestBody.recommend,
      name: requestBody.name,
      email: requestBody.email,
      photos: requestBody.photos,
      characteristics: requestBody.characteristics,
    },{
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: APIKey
      }

});
}

const putHelpful = (req, res) => {
  var reviewID = req.body.id
  return axios.put(`${APIHostURL}/reviews/${reviewID}/helpful`, null, {
    headers: {
      Authorization: APIKey
    }
  });
}

const putReportReview = (req, res) => {
  //TODO Reimplement with actual reviewID
  var reviewID = req.body.id
  console.log('Got request in report review:', req.body.id)
  return axios.put(`${APIHostURL}/reviews/${reviewID}/report`, null, {
    headers: {
      Authorization: APIKey
    }
  });
}

module.exports = {
  getReviews,
  getReviewsMeta,
  postReview,
  putHelpful,
  putReportReview
}




//OPTIONS & REQUIREMENTS FOR API

// REVIEWS

//getReviews
  // /reviews/ <-- GET list of reviews for a particular product
    // query params:
      // page (INT) -- slects page of results to return, defaulted to 1
      // count (INT) -- specifies how many results per page to return, defaulted to 5
      // sort (TEXT) -- change sort order of views (newest, helpful, relevant)
      // product_id (INT)  -- required id of product to retrieve reviews for

//getReviewsMeta
  // /reviews/meta <-- GET meta data for a given product
    // query params:
      // product_id (INT)  -- required id of product to retrieve reviews for


//postReview
  // /reviews <-- POST adds a new review for a given product
    // body params:
      // product_id (INT) -- required id of product being reviewed
      // rating (INT) -- 1-5, indicating review rating
      // summary (TEXT) -- summary text of review
      // body (TEXT) -- continued or full text of review
      // recommend (BOOL) -- value indicating if reviewer recommends product
      // name (TEXT) -- username for question asker (reviewer?)
      // email (TEXT) -- email address for question asker (reviewer?)
      // photos ( [TEXT] ) -- array of text urls that link to images to be shown
      // characteristics (OBJ) -- object of keys representing characteristic_id and values representing the review value for that characteristic

//putHelpful
  // /reviews/:review_id/helpful <-- PUT (will send a 204 in response, no content)
    // params:
      // review_id (INT) -- required id of review to update


//putReportReview
  // /reviews/:review_id/report <-- PUT (will send a 204 in response, no content), updates review to show it was reported, but does not delete review, will not show if you submit a GET request
    // params:
      // review_id (INT) -- required id of review to report
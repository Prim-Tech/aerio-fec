import * as React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

// import ReactDOM from 'react-dom';
// import App from '../client/src/index.jsx'
import Characteristics from '../client/src/components/reviews/Characteristics.jsx';
import KeyWordSearch from '../client/src/components/reviews/KeywordSearch.jsx';
import NewReview from '../client/src/components/reviews/NewReview.jsx';
import ProductBreakdown from '../client/src/components/reviews/ProductBreakdown.jsx';
import RatingBreakdown from '../client/src/components/reviews/RatingBreakdown.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import Reviews from '../client/src/components/reviews/Reviews.jsx';
import ReviewTile from '../client/src/components/reviews/ReviewTile.jsx';
import SortOptions from '../client/src/components/reviews/SortOptions.jsx';
import StarRating from '../client/src/components/reviews/StarRating.jsx';


// jest.mock('react-dom', () => ({ render: jest.fn() }))


var mockReviewsMeta = {
    "product_id": "1",
    "ratings": {
        "1": "56",
        "2": "22",
        "3": "41",
        "4": "66",
        "5": "165"
    },
    "recommended": {
        "false": "74",
        "true": "276"
    },
    "characteristics": {
        "Fit": {
            "id": 240582,
            "value": "3.5714285714285714"
        },
        "Length": {
            "id": 240583,
            "value": "3.1346153846153846"
        },
        "Comfort": {
            "id": 240584,
            "value": "3.3346007604562738"
        },
        "Quality": {
            "id": 240585,
            "value": "3.5077519379844961"
        }
    }
}

var mockReviews = {
    "product": "1",
    "page": 0,
    "count": 4,
    "results": [
        {
            "review_id": 1276234,
            "rating": 5,
            "summary": "Great Product",
            "recommend": true,
            "response": null,
            "body": "I would buy these again. But you shouldn't buy them because then there are more for me!",
            "date": "2022-08-27T00:00:00.000Z",
            "reviewer_name": "guest",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1277043,
            "rating": 4,
            "summary": "TESTING TESTING",
            "recommend": true,
            "response": null,
            "body": "This product is acceptable. I wouldn't write home about it, but it's good enough for what you need it for.",
            "date": "2022-10-22T00:00:00.000Z",
            "reviewer_name": "bubs",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1276844,
            "rating": 5,
            "summary": "",
            "recommend": true,
            "response": null,
            "body": "testing 123,....sfdaf adsfasdfasdfasdfxcxver 22131",
            "date": "2022-10-15T00:00:00.000Z",
            "reviewer_name": "123",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1276855,
            "rating": 5,
            "summary": "My Summary",
            "recommend": false,
            "response": null,
            "body": "I liked it cause its great and this needs to be longer",
            "date": "2022-10-15T00:00:00.000Z",
            "reviewer_name": "camer",
            "helpfulness": 0,
            "photos": []
        }
    ]
}

afterEach(() => {
  cleanup();
})

describe('Characteristics Component', () => {
  it('Renders Characteristics component',  () => {
    render(<Characteristics />)
    const element = screen.getByTestId('characteristics-1');
    expect(element).toBeInTheDocument();
  })
})
describe('KeyWordSearch Component', () => {
  it('Renders KeyWordSearch component',  () => {
    render(<KeyWordSearch />)
    const element = screen.getByTestId('keyWordSearch-1');
    expect(element).toBeInTheDocument();
  })
})
describe('NewReview Component', () => {
  it('Renders NewReview component',  () => {
    render(<NewReview reviewsMeta={mockReviews}/>)
    const element = screen.getByTestId('newReview-1');
    expect(element).toBeInTheDocument();
  })
})

describe('ProductBreakdown Component', () => {
  it('Renders ProductBreakdown component',  () => {
    render(<ProductBreakdown />)
    const element = screen.getByTestId('productBreakdown-1');
    expect(element).toBeInTheDocument();
  })
})

describe('RatingBreakdown Component', () => {
  it('Renders RatingBreakdown component',  () => {
    render(<RatingBreakdown reviewsMeta={mockReviewsMeta}/>)
    const element = screen.getByTestId('ratingBreakdown-1');
    expect(element).toBeInTheDocument();
  })
})

describe('ReviewList Component', () => {
  it('Renders ReviewList component',  () => {
    render(<ReviewList reviews={mockReviews}/>)
    const element = screen.getByTestId('reviewList-1');
    expect(element).toBeInTheDocument();
  })
})

describe('Reviews Component', () => {
  it('Renders Reviews component', () => {
    render (<Reviews productId={1}/>)
    const element = screen.getByTestId('reviews-1');
    expect(element).toBeInTheDocument();
  })
})

describe('ReviewTile Component', () => {
  it('Renders ReviewTile component',  () => {
    render(<ReviewTile review={mockReviews.results[0]}
    />)
    const element = screen.getByTestId('reviewTile-1');
    expect(element).toBeInTheDocument();
  })
})

describe('SortOptions Component', () => {
  it('Renders SortOptions component',  () => {
    render(<SortOptions />)
    const element = screen.getByTestId('sortOptions-1');
    expect(element).toBeInTheDocument();
  })
})

describe('StarRating Component', () => {
  it('Renders StarRating component',  () => {
    //render returns an object that are already bound to the base element
    const {getByTestId} = render(<StarRating />)
    expect(getByTestId('starRating-1')).toBeInTheDocument();
  })
})
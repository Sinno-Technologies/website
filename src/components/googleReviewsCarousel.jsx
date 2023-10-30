import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import reviews from '../data/googleReviews';

const GoogleReviews = () => {
    return (
        <Carousel
            ariaLabel="Reviews"
            emulateTouch={true}
            showArrows={true} 
            showStatus={false}
            swipeable={true}
            useKeyboardArrows={true}
        >
            {reviews.map((review, index) => (
                <section class="review" key={index}>
                    <h4>"{review.body}"</h4>
                    <div class="reviewInfo">
                        <span>{review.stars}</span>
                        <span>- {review.author}</span>
                    </div>
                </section>
            ))}
        </Carousel>
    );
};

export default GoogleReviews;
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import reviews from '../data/googleReviews';

const GoogleReviews = () => {
    return (
        <section className="carouselContainer">
            <h3 className="title" id="reviews">Client Reviews</h3>
            <Carousel
                ariaLabel="Reviews"
                emulateTouch={true}
                showArrows={true} 
                showStatus={false}
                useKeyboardArrows={true}
                aria-labelledby="carousel"
            >
                {reviews.map((review, index) => (
                    <section class="slide" key={index}>
                        <h4 class="body">"{review.body}"</h4>
                        <section class="stars">
                            <span>{review.stars}</span>
                            <span>- {review.author}</span>
                        </section>
                    </section>
                ))}
            </Carousel>
            <style jsx="true">{`
                .carouselContainer{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    width: 100%;
                }
                .title{
                    font-size: 3.5rem;
                    font-weight: bold;
                }
                .slide{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    color: var(--black);
                    border: 3px solid var(--black); 
                    background-color: var(--yellow);
                    border-radius: 0.7rem;
                }

                .slide h4{
                    padding: 1rem;
                    font-size: 2rem;
                }

                .stars{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                    text-align: center;
                    padding: 1rem;
                }

                .stars span{
                    font-style: italic;
                    font-size: 1.5rem;
                }
                
                .carousel-root{
                    width: 90%;
                }

                .carousel .control-dots .dot{
                    background-color: var(--black);
                    border: 1px solid var(--white);
                    transform: scale(2);
                }
                
                .carousel.carousel-slider .control-arrow, 
                .carousel.carousel-slider .control-next{
                    opacity: 1;
                    background-color: var(--bgBlack);
                }
            `}</style>
        </section>
    );
};

export default GoogleReviews;

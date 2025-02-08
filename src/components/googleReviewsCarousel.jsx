//import React from "react"
//import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
//import { Carousel } from "react-responsive-carousel"
import reviews from "../data/googleReviews"
import Review from "./Review.astro"

const GoogleReviews = (props) => {
    const { page } = props.props
    const homeReviews = reviews.slice(0, 3);
    return (
        <section className="carouselContainer">
        <div className="contentContainer maxWidth">
        <h3 className="title" id="reviews">
        Client Reviews
        </h3>
        <div className="reviewsContainer">
        </div>
        </div>
        <style jsx="true">{`
            .carousel-root {
                width: 100%;
            }
            .carouselContainer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--sectYellow);
                gap: 2rem;
                width: 100%;
                height: 100%;
                padding: 1rem;
            }
            .contentContainer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
            .reviewsContainer{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-items: center;
                width: 100%;
                height: 100%;
            }
            .title {
                width: 100%;
                height: auto;
                font-weight: bold;
                text-align: center;
                color: var(--black);
            }
            .slide {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                max-width: 300px;
                height: 100%;
                text-align: left;
                color: var(--black);
                border: 2px solid var(--black);
                background-color: var(--sectWhite);
                border-radius: 0.5rem;
                box-shadow: 4px 4px 4px var(--black);
            }


            @media screen and (max-width: 1200px) {
                .reviewsContainer{
                    grid-template-columns: repeat(1, 1fr);
                }
            }

            `}</style>
        </section>
    )
}

export default GoogleReviews

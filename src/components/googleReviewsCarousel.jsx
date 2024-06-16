import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import reviews from "../data/googleReviews"

const GoogleReviews = () => {
  return (
    <section className="carouselContainer">
      <h3 className="title" id="reviews">
        Client Reviews
      </h3>
      <Carousel
        ariaLabel="Reviews"
        emulateTouch={true}
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        aria-labelledby="carousel"
      >
        {reviews.map((review, index) => (
          <section className="slide" key={index}>
            <h4 className="body">"{review.body}"</h4>
            <section className="stars">
              <span>{review.stars}</span>
              <span className="author">- {review.author}</span>
            </section>
          </section>
        ))}
      </Carousel>
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
          height: auto;
          padding: 1rem;
        }
        .title {
          width: 100%;
          height: auto;
          font-size: 3.5rem;
          font-weight: bold;
          text-align: center;
          color: var(--black);
        }
        .slide {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          width: 100%;
          height: 100%;
          text-align: left;
          color: var(--black);
          border: 2px solid var(--black);
          background-color: var(--sectWhite);
          border-radius: 1rem;
        }

        .body {
          text-align: left;
          width: 100%;
          height: auto;
          overflow-wrap: break-word;
        }

        .slide h4 {
          font-size: 1.6rem;
        }

        .stars {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: auto;
          text-align: left;
          padding-top: 1rem;
        }

        .stars span {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .stars .author {
          font-size: 1.4rem;
        }

        .carousel .control-dots .dot {
          background-color: var(--black);
          border: 1px solid var(--white);
          transform: scale(2);
        }

        .carousel.carousel-slider .control-arrow,
        .carousel.carousel-slider .control-next {
          opacity: 0.2;
          background-color: var(--bgBlack);
        }

        .carousel.carousel-slider .control-arrow:hover,
        .carousel.carousel-slider .control-next:hover {
          opacity: 1;
          background-color: var(--bgBlack);
        }

        @media screen and (max-width: 1080px) {
          .title {
            font-size: 2.5rem;
          }
          .carousel-root {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default GoogleReviews

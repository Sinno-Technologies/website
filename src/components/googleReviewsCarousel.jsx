import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import reviews from "../data/googleReviews"

const GoogleReviews = () => {
  return (
    <section className="carouselContainer">
      <div class="contentContainer maxWidth">
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
              <p className="body">"{review.body}"</p>
              <section className="stars">
                <span className="author">- {review.author}</span>
                <span>{review.company}</span>
              </section>
            </section>
          ))}
        </Carousel>
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
          height: auto;
          padding: 1rem;
        }
        .contentContainer{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: auto;
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

        .stars {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: auto;
          text-align: left;
          padding-top: 1rem;
        }

        .stars *,
        .body {
          font-size: var(--font-size-lg);
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

        @media screen and (max-width: 576px) {
          .stars span,
          .body{
            font-size: var(--font-size-sm);
          }
          .carousel-root {
            width: 100%;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .stars span,
          .body{
            font-size: var(--font-size-base);
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

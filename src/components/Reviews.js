import React from 'react'
import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const query = graphql`
  {
    allStrapiReviews {
      nodes {
        text
        name
        company
        strapiId
      }
    }
  }
`

const Reviews = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }
    const data = useStaticQuery(query)
    const {allStrapiReviews:{nodes:reviews}} = data
    return (
        <div className="text-center py-5 border-bottom" id="reviews">
            <h2>Reviews</h2>
            <Slider {...settings}>
                {
                    reviews.map((item) => {
                        return <div className="px-3" key={item.strapiId}>
                            <h4>{item.name}</h4>
                            <p><FaQuoteLeft/>{item.text}<FaQuoteRight/></p>
                            <p className="company">{item.company ? item.company : ''}</p>
                        </div>
                    })
                }
                
            </Slider>
        </div>
    )
}

export default Reviews

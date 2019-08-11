/* eslint-disable */
import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import '../stylesheets/review.css';
import { useStaticQuery, graphql } from 'gatsby'

const Reviews = () => {
    return <div className="reviews">
        <h3 className="reviews-header">Customer reviews</h3>
        <ItemsCarousel
            gutter={12}
            activePosition={'center'}
            chevronWidth={60}
            numberOfCards={3}
            slidesToScroll={2}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            // activeItemIndex={this.state.activeItemIndex}
            // requestToChangeActive={value => this.setState({ activeItemIndex: value })}
            rightChevron={'>'}
            leftChevron={'<'}
        >
                <div className="review-item">
                    <div className="review-item-top">
                        <div className="review-item-avatar"></div>
                        <div className="review-item-title"></div>
                    </div>
                    <div className="review-item-content">
                    </div>
                    <div className="review-item-footer">
                        <div className="review-like-item">Like</div>
                    </div>
                </div>
        </ItemsCarousel>
    </div>
}

export default Reviews
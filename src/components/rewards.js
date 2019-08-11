/* eslint-disable */
import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import '../stylesheets/rewards.css'

class Rewards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {activeItemIndex: 0}

        this.leftIcon = this.leftIcon.bind(this)
        this.rightIcon = this.rightIcon.bind(this)
    }


    leftIcon() {
        return (
            <StaticQuery
                query={graphql`
                {
                    file(relativePath: {eq: "left.png"}) {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
                `}

                render={data => (
                    <img src={data.file.childImageSharp.fluid.src} className="arrow-icon" />
                )}
            />
        )
    }

    rightIcon() {
        return (
            <StaticQuery
                query={graphql`
                {
                    file(relativePath: {eq: "right.png"}) {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
                `}

                render={data => (
                    <img src={data.file.childImageSharp.fluid.src} className="arrow-icon" />
                )}
            />
        )
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                {
                    rewardIcons: allFile(filter: { relativePath: { regex: "/^rewards/" } }) {
                        edges {
                            node {
                                childImageSharp {
                                    fluid {
                                        src
                                    }
                                }
                            }
                        }
                    }
                }
                `}

                render={data => (
                    <div className="rewards">
                        <h3 className="rewards-header">Rewards</h3>
                        <ItemsCarousel
                            gutter={12}
                            activePosition={'center'}
                            chevronWidth={60}
                            numberOfCards={3}
                            slidesToScroll={2}
                            outsideChevron={true}
                            showSlither={false}
                            firstAndLastGutter={false}
                            activeItemIndex={this.state.activeItemIndex}
                            requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                            rightChevron={this.rightIcon()}
                            leftChevron={this.leftIcon()}
                        >
                            {data.rewardIcons.edges.map(pic => 
                                <img src={pic.node.childImageSharp.fluid.src} className="rewards-icon"/>
                            )}
                        </ItemsCarousel>
                    </div>
                )}
            />
        )
    }
}

export default Rewards
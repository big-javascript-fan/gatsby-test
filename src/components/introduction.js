/* eslint-disable */
import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Introduction = () => {
    // const data = useStaticQuery(graphql`
    //     query{
    //         placeholderImage: file(relativePath: { eq: "video-thumbnail.png"}) {
    //             childImageSharp {
    //                 thumbnail(maxWith: 800) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return <div className="introduction">
        <div className="video-thumbnail">
            {/* <Img fluid={data.placeholderImage.childImageSharp.thumbnail} /> */}
        </div>
        <div className="intro-description">
            <h1 className="intro-header"></h1>
            <div className="intro-label"></div>
            <div className="intro-prgs-bar"></div>
            <div className="intro-footer">
                <div className="intro-btn">ACQUISTA ORA</div>
                <div className="intro-share">
                    {/* <Img fluid={data.placeholderImage.childImageSharp.facebook} /> */}
                    {/* <Img fluid={data.placeholderImage.childImageSharp.instagram} /> */}
                    {/* <Img fluid={data.placeholderImage.childImageSharp.pinterest} /> */}
                </div>
            </div>
        </div>
    </div>
}

export default Introduction
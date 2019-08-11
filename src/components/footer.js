/* eslint-disable */
import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    // const data = useStaticQuery(graphql`
    //     query{
    //         placeholderImage: file(relativePath: { eq: "logo.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 200) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return <div className="footer">
        <div className="footer-about">
            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
            <div className="footer-about-address1"></div>
            <div className="footer-about-address2"></div>
        </div>
        <div className="footer-right">
            <div className="footer-menu">
                <div className="footer-supporto">
                    <h4>Supporto</h4>
                    <div className="footer-item">Blog</div>
                    <div className="footer-item">info@3bee.it</div>
                    <div className="footer-item">Chiarnaci</div>
                </div>
                <div className="footer-company">
                    <h4>Company</h4>
                    <div className="footer-item">Prodotti</div>
                    <div className="footer-item">Adotta un alveare</div>
                    <div className="footer-item">Business</div>
                </div>
                <div className="footer-termini">
                    <h4>Termini</h4>
                    <div className="footer-item">Termini & Condizioni</div>
                    <div className="footer-item">Privacy Policy</div>
                </div>
            </div>
            <div className="footer-share">
                
            </div>
        </div>
    </div>
}

export default Footer
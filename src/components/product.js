/* eslint-disable */
import React from 'react'
import "../stylesheets/product.css"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';

const Product = (props) => {
    const {product} = props
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "prezzo.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
    `)
    return <div className="product-card">
        <h3>{product.name}</h3>
        <div className="product-info">
            <p className="prod-price-origin">€{product.priceOrign}</p>
            <p className="prod-price">€{product.price} <span className="prod-price-percent">%</span></p>
            <p className="prod-price-label" style={{background: 'url(' + data.file.childImageSharp.fluid.src + ') no-repeat left'}}>Prezzo pre-lancio</p>
        </div>
        <div className="prod-detail">
            <div className="prod-character">CARATTERISTICHE E SERVIZI</div>
            <div className="prod-detail-price-group">
                <div className="prod-detail-price">€{product.price} EUR</div>
                <div className="prod-detail-origin">€{product.priceOrign} <span>({Math.floor((product.priceOrigin - product.price)/product.price*100)}% sconto)</span></div>
            </div>
            <ul className="prod-characters">
                {
                    product.characteristics.map(character => (
                        <li>{character}</li>
                    ))
                }
            </ul>
            <div className="prod-detail-data">Data stimata di spedizione</div>
            <div className="prod-detail-date">{product.stimata}</div>
            <div className="prod-detail-amount">{product.disponibili}</div>
            <div>Spedizione {product.spedizione}</div>
        </div>
        <div className="prod-select">SELEZIONA</div>
    </div>
}

export default Product
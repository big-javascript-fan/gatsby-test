/* eslint-disable */
import React from 'react'
import Prototipo from './prototipo'
import Definition from './definition'
import Reviews from './review'
import Pricing from './pricing'
import Block5 from './block5'
import Presentaci from './presentaci'
import Media from './media'
import Pricing2 from './pricing2'
import Rewards from './rewards'
import Product from './product'
import { useStaticQuery, graphql } from 'gatsby';

const Content = () => {
    const data = useStaticQuery(graphql`
        query {
            allYaml {
                edges {
                    node {
                        name
                        price
                        priceOrign
                        spedizione
                        stimata
                        disponibili
                        characteristics
                    }
                }
            }
      }
    `)
    console.log(data);
    return <div className="content">
        <div className="content-left">
            <Prototipo />
            <Definition />
            {/* <Reviews /> */}
            {/* <Pricing /> */}
            <Block5 />
            {/* <Presentaci /> */}
            <Media />
            {/* <Pricing2 /> */}
            <Rewards />
        </div>
        {/* <div className="content-right">
            <h4>Seleziona un prodotto</h4>
            { data.allYaml.edges.map(product => (
                <Product product={product.node} />
            ))}
        </div> */}
    </div>
}

export default Content
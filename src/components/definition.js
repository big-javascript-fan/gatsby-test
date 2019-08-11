/* eslint-disable */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import '../stylesheets/definition.css';

const Definition = () => {
    const data = useStaticQuery(graphql`
        {
            icons: allFile(filter: { relativePath: { regex: "/^definition/" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
            logo: file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            products: file(relativePath: {eq: "products.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
    `)

    return <div className="definition">
        <div className="def-top">
            <div>
                <img src={data.logo.childImageSharp.fluid.src} className="def-logo" />
            </div>
            <img src={data.products.childImageSharp.fluid.src} className="def-product"/>
        </div>
        <div className="def-bottom">
            <div className="def-middle">
                <p className="def-middle-label">Titolo da definire</p>
            </div>
            <div className="def-bottom-icons">
                {
                    data.icons.edges.map(edge => (
                        <div className="def-bottom-icon">
                            <img src={edge.node.childImageSharp.fluid.src} />
                            <p>{edge.node.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="def-bottom-desc">
                La bilancia 3Bee non ha nessuna necessità di SIM esterna, basta posizionare la bilancia singola sotto l'arnia, registrare la bilancia sul tuo account 3Bee e attendere la prima pesata. Perfetta per valutare importazione nettarifera e lo stato delle scorte, ha un'accuratezza dell'80% sul peso della cassa. Collegandoti al tuo profilo 3Bee potrai monitorare ogni giorno i parametri dell'alveare, le condizioni meteo, la produttività e il livello delle scorte. Aggiungi notifiche e pianificai tuoi interventi.
            </div>
        </div>
    </div>
}

export default Definition
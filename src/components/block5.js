/* eslint-disable */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

import '../stylesheets/block5.css'

const Block5 = () => {
    const data = useStaticQuery(graphql`
    {
        rewardIcons: allFile(filter: { relativePath: { regex: "/^block5/" } }) {
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
    `)
    return <div className="block5">
        <div className="block5-left">
            <div className="block5-item">
                <img src={data.rewardIcons.edges[0].node.childImageSharp.fluid.src} />
                <p>Grazie a questa sezione avrai un veloce e intuitivo riepilogo su tutti i parametri fondamentali da monitorare.</p>
            </div>
            <div className="block5-item">
                <img src={data.rewardIcons.edges[1].node.childImageSharp.fluid.src} />
                <p>Grazie al grafico sul peso potrai valutare importazione nettarifera e stato delle scorte.</p>
            </div>
            <div className="block5-item">
                <img src={data.rewardIcons.edges[2].node.childImageSharp.fluid.src} />
                <p>Grazie ai grafici su temperatura ed umidità potrai valutare lo stato di salubrità interna all’alveare.</p>
            </div>
            <div className="block5-item">
                <img src={data.rewardIcons.edges[3].node.childImageSharp.fluid.src} />
                <p>Grazie al grafico sui suoni potrai valutare la presenza di pericoli, malattie o problemi all’interno dell’arnia.</p>
            </div>
        </div>
        <div className="block5-right">
            <div className="block5-item">
                <img src={data.rewardIcons.edges[4].node.childImageSharp.fluid.src} />
                <p>Con l’aggiunta del nostro antifurto GPS potrai proteggere e controllare h24 il tuo apiario</p>
            </div>
            <div className="block5-item">
                <img src={data.rewardIcons.edges[5].node.childImageSharp.fluid.src} />
                <p>Grazie al calendario potrai aggiungere notifiche importanti e pianificare il tuo calendario delle attività</p>
            </div>
        </div>
    </div>
}

export default Block5
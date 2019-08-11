/* eslint-disable */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../stylesheets/prototipo.css'

const Prototipo = () => {
    const query = useStaticQuery(graphql`
        query {
            image1: file(relativePath: {eq: "steps/step1.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            image2: file(relativePath: {eq: "steps/step2.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            image3: file(relativePath: {eq: "steps/step3.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            image4: file(relativePath: {eq: "steps/step4.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            image12: file(relativePath: {eq: "steps/step12.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            image23: file(relativePath: {eq: "steps/step23.png"}) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
            checkImage: file(relativePath: { eq: "check.png" }) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
      
    `)
    return <div className="prototipo">
        <div className="proto-prog round-border">
            <h2 className="proto-header">Prototipo</h2>
            <div className="proto-description">Il team ha sviluppato una nuova versione perfettamente funzionante del prodotto. La capacità di iniziare la produzione può essere influenzata dalle esigenze finanziarie.</div>
            <div className="proto-progress">
                <div className="proto-steps-imgs">
                    <div className="proto-step-grp">
                        <img className="proto-steps-img" src={query.image1.childImageSharp.fluid.src} />
                        <p>Concept</p>
                    </div>
                    <img className="proto-steps-img1" src={query.image12.childImageSharp.fluid.src} style={{marginLeft: '-25px'}}/>
                    <div className="proto-step-grp" style={{textAlign: 'center', marginLeft: '-15px'}}>
                        <img className="proto-steps-img" src={query.image2.childImageSharp.fluid.src} />
                        <p>Sviluppo</p>
                    </div>
                    <img className="proto-steps-img1" src={query.image23.childImageSharp.fluid.src} style={{marginLeft: '-13px'}} />
                    <div className="proto-step-grp" style={{textAlign: 'center', marginLeft: '-25px'}}>
                        <img className="proto-steps-img" src={query.image3.childImageSharp.fluid.src} />
                        <p>Produzione</p>
                    </div>
                    <img className="proto-steps-img1" src={query.image23.childImageSharp.fluid.src} style={{marginLeft: '-24px'}} />
                    <div className="proto-step-grp"  style={{textAlign: 'right', marginLeft: '-51px'}}>
                        <img className="proto-steps-img" src={query.image4.childImageSharp.fluid.src} />
                        <p>Spedizione</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="proto-panoramica">
            <h3>Panoramica</h3>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Compatta: Misure</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Leggera: Peso</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Nessuna necessita di SIM esterna</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>GPS integrato</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Durata batteria 3 mesi</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Resistente a qualsiasi temperatura</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Garanzia 2 anni</p>
            </div>
            <div className="proto-pano-item">
                <img className="proto-check-img" src={query.checkImage.childImageSharp.fluid.src} />
                <p>Web app gestionale da remoto</p>
            </div>
        </div>
    </div>
}

export default Prototipo
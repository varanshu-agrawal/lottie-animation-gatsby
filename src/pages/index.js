import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Lottie from 'react-lottie';
// import animationData from '../lotties/pre-loaded';
import animationData from '../lotties/pre-loaded.json';
import { useState } from "react"

const contactAnimation = JSON.parse(JSON.stringify(animationData))

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//     }
// };

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}


const IndexPage = () => {
    const [stopped, setStopped] = useState(false)
    const [paused, setPaused] = useState(false)

    return (
        <Layout>
            <Seo title="Home" />
            <div className={styles.textCenter}>
                <StaticImage
                    src="../images/example.png"
                    loading="eager"
                    width={64}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    style={{ marginBottom: `var(--space-3)` }}
                />
                <h1>
                    Welcome to <b>Gatsby!</b>
                </h1>
            </div>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>

        </Layout>
    )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

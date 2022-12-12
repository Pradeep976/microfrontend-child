import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import CatalogComponent from "../components/Catalog";

const Nav = dynamic(() => import('container.js/nav'));
const Footer = dynamic(() => import('container.js/footer'));

export default function Catalog() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Nav>This is the Nav Component in Child App</Nav>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    This is the Catalog Page in Child App
                </h1>
                <h2>More changes</h2>

                <CatalogComponent />
            </main>

            <Footer />
        </div>
    )
}

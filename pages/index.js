import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('container.js/nav'));
const Footer = dynamic(() => import('container.js/footer'));

export default function Home() {
    return (
        <div>
            Clients Page
        </div>
    )
}

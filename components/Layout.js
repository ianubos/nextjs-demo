import React from 'react'
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'

function Layout({children}) {
    return (
        <>
        <Meta />
        <Nav />
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout

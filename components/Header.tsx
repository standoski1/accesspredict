import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";
import { BiBasketball, BiFootball } from 'react-icons/bi'
import { Dropdown } from 'react-bootstrap'



export default function Header() {

    const router = useRouter()
    const routepath = router.asPath
    const [isOpen, setIsOpen] = useState(false);


    return (
      <>
       <div className={styles.Navbar}>
        <Link href="/"><span className={styles.navlogo}><Image width={60} height={50} src="/images/access.png" alt="best football prediction site" className="card-img-top"/></span></Link>
        <div className={`${styles.navitems} ${isOpen === true && styles.open}`}>
          <Link href="/" className={routepath === "/" && styles.active}>Home</Link>
          <hr />
          <Link href="/privacy" className={routepath === "/privacy" && styles.active}>Privacy</Link>
          <hr />
          <Link href="/disclaimer" className={routepath === "/disclaimer" && styles.active}>Disclaimer</Link>
          <hr />
          <Link href="/" className={routepath === "/" && styles.active}>Football</Link>
          <hr />
          <Link href="/basketball" className={routepath === "/basketball" && styles.active}>Basketball</Link>
          
        </div>
        <div
          className={`${styles.navtoggle} ${isOpen === true && styles.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.bar}></div>
        </div>
      </div>


      

      </>
    );
}
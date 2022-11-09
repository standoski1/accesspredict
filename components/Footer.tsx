import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className="container">
            <hr className={styles.footerline}/>
            <div className="row ">
                
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className={styles.footerwidget}>
                        <ul className={styles.listunstyled}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/privacy">Privacy</Link></li>
                            <li><Link href="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>
               
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className={styles.footerwidget}>
                        <ul className={styles.listunstyled}>
                            <li><Link href="/">Football</Link></li>
                            <li><Link href="/basketball">Basketball</Link></li>
                            <li><a href="mailto:accesspredict@gmail.com">accesspredict@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
              
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className={styles.footerwidget}>
                        <ul className={styles.listunstyled}>
                           <li><a href="https://twitter.com/accesspredict" target="_blank" rel="noopener noreferrer"><i className='fa fa-twitter-square'></i> Twitter</a></li>
                            <li><a href="https://facebook.com/profile.php?id=100087756305330" target="_blank" rel="noopener noreferrer"><i className='fa fa-facebook-square'></i> Facebook</a></li>
                        </ul>
                    </div>
                </div>
               
                
                
            </div>
            <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                    <div className={styles.tinyfooter}>
                        <p>Copyright © All Rights Reserved 2022 | Design & Development by <a href="https://grafytech.com" target="_blank" rel="noopener noreferrer" className="copyrightlink">Grafytech</a></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
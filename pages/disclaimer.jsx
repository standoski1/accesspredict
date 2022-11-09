import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Disclaimer() {
  return (
    <>
    <Head>
        <meta property="og:title" content="Copyrighted Contents"/>
        <meta property="og:description" content="What to do if I want you to remove certain copyrighted comments from your website."/>
        <meta property="og:image" content="/images/access.png"/>
        <meta property="og:url" content="https://accesspredict.com?"/>
        <title>Copyrighted Contents</title>
        <meta name="description" content="What to do if I want you to remove certain copyrighted comments from your website." />
    </Head>
    <Header/>
    
    <div className="container" style={{marginTop:'8rem'}}>
    <div className="row">
    <div className="col-md-12">
    <div className="card">
    <div className="card-body">
    <h1>Copyrighted Contents</h1>
    <p>What to do if I want you to remove certain copyrighted comments from your website?
    Please note that we do not host any copyrighted content on this website. The comments (text) contains only information shared by users that do not contain data that might be copyrighted in any way.However, i offer a service to remove comments from my website if the copyright holder of the content requests so. These removal requests are only valid if:</p>
    <p>1. <bold>You are, or your company</bold> is, the copyright holder of the content in question.
    You provide the exact URLs to the comment.
    You provide the complete name(s) of the content in question.
    You send the removal request using a verifiable email address (e.g. address@yourname/yourcompany.com).</p>
    <p> <bold>If your request complies with all of these rules</bold>, send a mail to accesspredict@gmail.com
    Please keep the correspondence polite.
    I will remove postings as soon as i can, usually within 4 days. Keep in mind that i can only handle removal requests that comply with the above rules.</p>
    <p>
    <bold>Copyright infringement</bold> is defined by the United States Copyright Office as such: As a general matter, copyright infringement occurs when a copyrighted work is reproduced, distributed, performed, publicly displayed, or made into a derivative work without the permission of the copyright owner.
    </p>
   
    <h3>and in no account should you use any material that belongs to accesspredict, without the written permission to accesspredict, if such is done, you will surely face the penalty. which may include you and your company being charged to court by accesspredict,and also your hosting provider will also be contacted,and your account might be blocked. this content includes, pictures,source codes,and so on,
    please be warned</h3> !!!
   
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

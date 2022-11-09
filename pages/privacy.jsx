import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Privacy() {
  return (

    <>
    <Head>
        <meta property="og:title" content="Welcome to our Privacy Policy"/>
        <meta property="og:description" content="You may consult this list to find the Privacy Policy for each of the advertising partners of accesspredict.com."/>
        <meta property="og:image" content="/images/access.png"/>
        <meta property="og:url" content="https://accesspredict.com?"/>
        <title>Welcome to our Privacy Policy</title>
        <meta name="description" content="You may consult this list to find the Privacy Policy for each of the advertising partners of accesspredict.com." />
    </Head>
    <Header/>

    <div className="container" style={{marginTop:'8rem'}}>
        <div className="row">
        <div className="col-md-12">
        <div className="card" >
        <div className="card-body">
        <h1>Welcome to our Privacy Policy</h1>
        <p> You may consult this list to find the Privacy Policy for each of the advertising partners of accesspredict.com. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on accesspredict.com, which are sent directly to user&apos;s browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p>Note that accesspredict.com has no access to or control over these cookies that are used by third-party advertisers.</p>
        <h3>Third Party Privacy Policies</h3>
        <p>accesspredict.com&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browser&apos;s respective websites.</p>
        <h3>Children&apos;s Information</h3>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. accesspredict.com does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        <h3>Online Privacy Policy Only</h3>
        <p>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in accesspredict.com. This policy is not applicable to any information collected offline or via channels other than this website. Consent</p>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        <h3>Contacting Us</h3>
        <h4>send your mails directly to <a href="mailto:accesspredict@gmail.com">accesspredict@gmail.com</a> </h4>
        </div>
        </div>
        </div>
        </div>
        </div>

    <Footer/>
    </>
  )
}

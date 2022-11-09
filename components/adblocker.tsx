import React, { useEffect, useState } from 'react'
import { useDetectAdBlock } from "adblock-detect-react";
import { Modal } from 'react-bootstrap'
import Image from 'next/image';

export default function Adblocker() {

    const adBlockDetected = useDetectAdBlock();
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (adBlockDetected) {
            setShow(true)
        }
    }, [adBlockDetected])
    
 

  return (
    <div>
        <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title> <Image style={{marginTop:'-10px'}} src="/images/adblock3.png" width={40} height={35} alt="adblock"/> &nbsp; ADBLOCK IS ENABLED</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We have detected that you are using adblock on your browser. <br />
          Please disable adblock on accesspredict.com and reload this page to access our free predictions
        </Modal.Body>
        <Modal.Footer style={{fontSize:'18px',fontWeight:'600'}}>
          Ads are necessary to keep this website free, we guarantee clean ads.
        </Modal.Footer>
      </Modal>
    </div>
  )
}

import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/mobile.module.css'
import { Table, Alert, Spinner } from 'react-bootstrap'



export default function PredictMobile({League, Fixture, Loading}:any) {

    const [clicked, setClicked] = useState(false);

    const toggle = (index:any) => {
        if (clicked === index) {
          return setClicked(false);
        }
        setClicked(index);
      };
     

  return (
    <div>
       {Loading === true? <div style={{textAlign:'center'}}> <span><Spinner animation="border"/>&nbsp;&nbsp;<span>Loading...</span></span></div> :
        !League? 
        <Alert variant="danger">
        <Alert.Heading>Oops ! Something went wrong!</Alert.Heading>
        <p>
        Please check your network connection and try again. but if this error persists, please clear your 
        browser cache or try with a different browser.
        </p>
        </Alert> :
        League?.map((data:any,i:any)=>(
            <React.Fragment key={i}>
        <div className={styles.mobCountry}>
         <Image style={{marginTop:'-4px',marginRight:'10px'}} src={data.flag? data.flag : "/images/fifa.png"} width={22} height={15} alt='accesspredict'/> 
         {data.country} : {data.leagueName}
        </div>

        <Table size="sm">
        <tbody>
          {Fixture?.filter((x:any)=>x.leagueId === data.leagueId).map((dat:any,index:any)=>(
            <React.Fragment key={index}>
            <tr>
            <td style={{width:'10%'}}> 
               <div className={styles.mobTime}>
                   {dat?.status === "NS"? new Date(dat?.time).toTimeString().slice(0,5) : dat?.status}
                   {dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"?<div className={styles.sup}>.</div>:''}
               </div>
            </td>
            <td style={{width:'30%'}}> <div className={styles.mobTeam}>{dat?.homeTeam}</div></td>
            <td style={{width:'10%'}}>
               <div className={styles.mobScore}> 
                <div style={{marginRight:'2px'}}>
                    <div className={dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"? styles.deskScore2 : styles.deskScore1}>
                      {dat?.goalHome? dat?.goalHome : '?'}
                    </div>
                </div>
                <div style={{marginLeft:'2px'}}>
                    <div className={dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"? styles.deskScore2 : styles.deskScore1}>
                      {dat?.goalAway? dat?.goalAway : '?'}
                    </div>
                </div> 
              </div>
            </td>
            <td style={{width:'30%'}}> <div className={styles.mobTeam}>{dat?.awayTeam}</div></td>
            <td style={{width:'10%'}}> 
               <div className={styles.mobTip} style={{background:`${dat.status === "FT" || dat.status === "PEN" || dat.status === "AET"?
                      (dat.tip === '1' && (parseInt(dat.goalHome) > parseInt(dat.goalAway)) ? '#08d13b' : dat.tip === '1x' && (parseInt(dat.goalHome) > parseInt(dat.goalAway) || parseInt(dat.goalHome) === parseInt(dat.goalAway)) ? '#08d13b' :
                      dat.tip === '2' && (parseInt(dat.goalHome) < parseInt(dat.goalAway)) ?'#08d13b': dat.tip === 'x2' && (parseInt(dat.goalHome) < parseInt(dat.goalAway) || parseInt(dat.goalHome) === parseInt(dat.goalAway)) ? '#08d13b' : 
                      dat.tip === '12' && (parseInt(dat.goalHome) !== parseInt(dat.goalAway)) ?'#08d13b': dat.tip === 'X' && (parseInt(dat.goalHome) === parseInt(dat.goalAway)) ?'#08d13b': '#bbbcbd'): "#088bd1"}`}}>
                   {dat?.tip}
               </div>
            </td>
            <td style={{width:'10%'}}>
                <div onClick={() => toggle(dat._id)}>
                {clicked === dat._id ? <i className="fa fa-angle-up" style={{fontSize:'28px'}}></i> :
                <i className="fa fa-angle-down" style={{fontSize:'28px'}}></i> }
                </div>
            </td>
            </tr>
            {clicked === dat._id ? (
            <tr>
                <td colSpan={6}>
                    <div>
                        <div className={styles.mobAllForm}>
                        <div className={styles.allDeskForm}>
                          <div style={{backgroundColor:`${dat?.homeForm?.length > 0 && (dat?.homeForm[0] === "W"? 'green' :dat?.homeForm[0] === "D"? 'orange' :dat?.homeForm[0] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.homeForm?.length > 0 && (dat?.homeForm[0]?dat?.homeForm[0]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.homeForm?.length > 0 && (dat?.homeForm[1] === "W"? 'green' :dat?.homeForm[1] === "D"? 'orange' :dat?.homeForm[1] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.homeForm?.length > 0 && (dat?.homeForm[1]?dat?.homeForm[1]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.homeForm?.length > 0 && (dat?.homeForm[2] === "W"? 'green' :dat?.homeForm[2] === "D"? 'orange' :dat?.homeForm[2] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.homeForm?.length > 0 && (dat?.homeForm[2]?dat?.homeForm[2]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.homeForm?.length > 0 && (dat?.homeForm[3] === "W"? 'green' :dat?.homeForm[3] === "D"? 'orange' :dat?.homeForm[3] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.homeForm?.length > 0 && (dat?.homeForm[3]?dat?.homeForm[3]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.homeForm?.length > 0 && (dat?.homeForm[4] === "W"? 'green' :dat?.homeForm[4] === "D"? 'orange' :dat?.homeForm[4] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.homeForm?.length > 0 && (dat?.homeForm[4]?dat?.homeForm[4]:'-')}</div>
                      </div>
                      <div className={styles.allDeskForm2}>
                          <div style={{backgroundColor:`${dat?.awayForm?.length > 0 && (dat?.awayForm[0] === "W"? 'green' :dat?.awayForm[0] === "D"? 'orange' :dat?.awayForm[0] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.awayForm?.length > 0 && (dat?.awayForm[0]?dat?.awayForm[0]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.awayForm?.length > 0 && (dat?.awayForm[1] === "W"? 'green' :dat?.awayForm[1] === "D"? 'orange' :dat?.awayForm[1] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.awayForm?.length > 0 && (dat?.awayForm[1]?dat?.awayForm[1]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.awayForm?.length > 0 && (dat?.awayForm[2] === "W"? 'green' :dat?.awayForm[2] === "D"? 'orange' :dat?.awayForm[2] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.awayForm?.length > 0 && (dat?.awayForm[2]?dat?.awayForm[2]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.awayForm?.length > 0 && (dat?.awayForm[3] === "W"? 'green' :dat?.awayForm[3] === "D"? 'orange' :dat?.awayForm[3] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.awayForm?.length > 0 && (dat?.awayForm[3]?dat?.awayForm[3]:'-')}</div>
                          <div style={{backgroundColor:`${dat?.awayForm?.length > 0 && (dat?.awayForm[4] === "W"? 'green' :dat?.awayForm[4] === "D"? 'orange' :dat?.awayForm[4] === "L"? 'red' :'grey')}`}} 
                          className={styles.deskForm}>{dat?.awayForm?.length > 0 && (dat?.awayForm[4]?dat?.awayForm[4]:'-')}</div>
                      </div>
                        </div>
                        <div className={styles.mobAllForm}>
                            <div className={styles.mobOdd}>{dat?.odd1}</div>
                             <div className={styles.mobOver}>{dat?.overUnder}</div> 
                             <div className={styles.mobOdd}>{dat?.odd2}</div>
                        </div>
                    </div>
                    <p style={{textAlign:'center', marginTop:10, marginBottom:-2,fontWeight:600}}>Head to Head</p>
                  <div className={styles.allMobPredOdd}>
                    <div>
                    <div className={styles.predOdd2}>
                      <div className={styles.headtoheadMobHome}>Home</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome1}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome2}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome3}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome4}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome5}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hHome6}</div>
                    </div>
                    <div className={styles.predOdd2}>
                    <div className={styles.headtoheadMobAway}>Away</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway1}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway2}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway3}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway4}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway5}</div>
                      <div className={styles.headtoheadMob}>{dat?.h2hAway6}</div>
                    </div>
                    </div>
                  </div>
                </td>
            </tr>
            ) : false}
            </React.Fragment>
          ))}
        </tbody>
        </Table>
        </React.Fragment>
        ))}
    </div>
  )
}

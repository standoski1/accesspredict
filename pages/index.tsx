import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { Table, Spinner, Alert, Row, Col, Accordion, Container } from 'react-bootstrap'
import PredictMobile from '../components/predictMobile'
import { axiosInstance } from '../utils/axios'
import moment from 'moment'
import Link from 'next/link'
import Footer from '../components/Footer'
import Adblocker from '../components/adblocker'



export const getServerSideProps = async () => {
  try {
    const response = await (await axiosInstance.get("home/fetchfreepred")).data

     return {
       props: {
        FirstLeague: response.fetchlig,
        FirstFixtures: response.fetchfix
      },
     };
 } catch (error:any) {
     return {
         props: {
             error: error.message
         },
     };
 }
   
 }

const Home: NextPage = ({FirstLeague,FirstFixtures,error}:any) => {

 

  let Yesterday = moment(new Date()).add(-1,'days').format("YYYY-MM-DD")
  let today = moment(new Date()).format("YYYY-MM-DD")
  let tomm = moment(new Date()).add(1,'days').format("YYYY-MM-DD")
  let next = moment(new Date()).add(2,'days').format("YYYY-MM-DD")
  const [newDate, setnewDate] = useState(today)
  const [League, setLeague] = useState<any[]>([])
  const [Fixture, setFixture] = useState<any[]>([])
  const [Loading, setLoading] = useState(true)
  const [Prev, setPrev] = useState<any[]>([])


  if (error) {
    console.log(error);
  }

   
  useEffect(() => {
    fetchNew()
  }, [newDate])

  const fetchNew = async()=>{
    if (newDate !== '') {
      let findleague = FirstLeague?.filter((x:any)=>x.leagueDate === newDate)
      setLeague(findleague)
      let findFix = FirstFixtures?.filter((x:any)=>x.date === newDate)
      setFixture(findFix)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFreePrev()
  }, [])

  const fetchFreePrev = async()=>{
    await axiosInstance.get('access/fetchfreeprev').then((res:any)=>{
      setPrev(res.data)
    }).catch((err:any)=>{
      console.log(err.message);
    })
  }
  
  
  
  return (
    <React.Fragment>
      <Head>
        <title key="home title">Accesspredict: Best Football Prediction Site|Betting tips</title>
        <meta property="og:title" content="Accesspredict: Best Football Prediction Site|Betting tips"/>
        <meta property="og:description" content="Best Football Prediction Site, Accesspredict analyze football games perfectly and provide free and winning bet tips on all football matches."/>
        <meta property="og:image" content="/images/access.png"/>
        <meta property="og:url" content="https://accesspredict.com?"/>
        <meta name="description" content="Best Football Prediction Site, Accesspredict analyze football games perfectly and provide free and winning bet tips on all football matches."></meta>
        <meta name="keywords" content="bet, best football prediction site, best football predictions and tips, Free football prediction site, best Football prediction site in Nigeria"></meta>
      </Head>

      <Adblocker/>

      <Header/>

      
      <div className={styles.container}>


        <div className={styles.headDiv}>

          <div className={`${styles.mainDiv} card`}>

            <div className={styles.mainButton}>
            <Link href='/basketball' style={{textDecoration:'none'}}><div className={styles.singbtn}>Basketball</div></Link>
              <div onClick={()=>setnewDate(Yesterday)} className={newDate === Yesterday? styles.singact : styles.singbtn}>{moment(Yesterday).format("DD-MM")}</div>
              <div onClick={()=>setnewDate(today)} className={newDate === today? styles.singact : styles.singbtn}>today</div>
              <div onClick={()=>setnewDate(tomm)} className={newDate === tomm? styles.singact : styles.singbtn}>{moment(tomm).format("DD-MM")}</div>
              <div onClick={()=>setnewDate(next)} className={newDate === next? styles.singact : styles.singbtn}>{moment(next).format("DD-MM")}</div>
            </div>

            <div className={styles.mobileDiv}>
            <PredictMobile League={League} Fixture={Fixture} Loading={Loading}/>
            </div>

            <div className={styles.desktopDiv}>
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
              <div className={styles.country}><Image style={{marginTop:'-4px',marginRight:'10px'}} src={data.flag? data.flag : "/images/fifa.png"} width={20} height={13} alt='accesspredict'/>
               {data.country} : {data.leagueName}
               </div>

               <Table>
                <tbody>
                 {Fixture?.filter(x=>x.leagueId === data.leagueId).map((dat:any,i:any)=>(
                  <tr key={i}>
                    <td className={styles.deskTime} style={{width:'10%'}}>
                       <div className={styles.deskTimerelat}>
                        {dat?.status === "NS"? new Date(dat?.time).toTimeString().slice(0,5) : dat?.status}
                        {dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"?<div className={styles.sup}>.</div>:''}
                       </div>
                    </td>
                    <td className={styles.deskTeam} style={{width:'25%'}}>{dat?.homeTeam} <br /> {dat?.awayTeam}</td>
                    <td className={styles.predOdd}>
                      <div className={styles.allPredOdd}>
                        <div className={styles.predOdd2}>
                          <div className={styles.headtohead}>{dat?.h2hHome1}</div>
                          <div className={styles.headtohead}>{dat?.h2hHome2}</div>
                          <div className={styles.headtohead}>{dat?.h2hHome3}</div>
                          <div className={styles.headtohead}>{dat?.h2hHome4}</div>
                          <div className={styles.headtohead}>{dat?.h2hHome5}</div>
                          <div className={styles.headtohead}>{dat?.h2hHome6}</div>
                        </div>
                        <div className={styles.predOdd2}>
                          <div className={styles.headtohead}>{dat?.h2hAway1}</div>
                          <div className={styles.headtohead}>{dat?.h2hAway2}</div>
                          <div className={styles.headtohead}>{dat?.h2hAway3}</div>
                          <div className={styles.headtohead}>{dat?.h2hAway4}</div>
                          <div className={styles.headtohead}>{dat?.h2hAway5}</div>
                          <div className={styles.headtohead}>{dat?.h2hAway6}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{width:'25%'}}>
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
                      <br /> 
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
                    </td>
                    <td style={{width:'10%'}} className={styles.deskOdd}>{dat?.odd1} <br /> {dat?.odd2}</td>
                    <td style={{width:'10%'}}><div className={styles.deskOver}>{dat?.overUnder}</div></td>
                    <td style={{width:'10%'}}>
                      <div className={styles.deskTip} style={{background:`${dat.status === "FT" || dat.status === "PEN" || dat.status === "AET"?
                      (dat.tip === '1' && (parseInt(dat.goalHome) > parseInt(dat.goalAway)) ? '#08d13b' : dat.tip === '1x' && (parseInt(dat.goalHome) > parseInt(dat.goalAway) || parseInt(dat.goalHome) === parseInt(dat.goalAway)) ? '#08d13b' :
                      dat.tip === '2' && (parseInt(dat.goalHome) < parseInt(dat.goalAway)) ?'#08d13b': dat.tip === 'x2' && (parseInt(dat.goalHome) < parseInt(dat.goalAway) || parseInt(dat.goalHome) === parseInt(dat.goalAway)) ? '#08d13b' : 
                      dat.tip === '12' && (parseInt(dat.goalHome) !== parseInt(dat.goalAway)) ?'#08d13b': dat.tip === 'X' && (parseInt(dat.goalHome) === parseInt(dat.goalAway)) ?'#08d13b': '#bbbcbd'): "#088bd1"}`}}>
                       {dat?.tip}
                      </div>
                    </td>
                    <td style={{width:'10%'}}>
                     <div className={dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"? styles.deskScore2 : styles.deskScore1}>
                      {dat?.goalHome? dat?.goalHome : '?'}
                      </div>
                     <div className={dat.status === "1H" || dat?.status === "2H" || dat?.status === "ET" || dat?.status === "P"? styles.deskScore2 : styles.deskScore1}>
                      {dat?.goalAway? dat?.goalAway : '?'}
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </Table>
              </React.Fragment>
              ))}
            </div>
  

          </div>
          
          </div>

          <h3 style={{textAlign:'center',marginTop:'30px'}}>FAQ</h3>
           
           <Container>
           <br />
           <Row>
            <Col md={6}>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Real Football Prediction Site</Accordion.Header>
                  <Accordion.Body>
                  We are a legitimate football prediction site that provides in-depth game analyses. 
                  We provide free football predictions for all football matches to our visitors. 
                  We also make winning games for visitors incredibly simple. Visitors can use our precise, 
                  real-time information to help them with their forecasts. We also offer two different 
                  sorts of sport tips; the first the football prediction, and the second is a basketball 
                  prediction. We also offer statistics for both the home and away teams. 
                  To keep you up to date.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Free Football Prediction Site</Accordion.Header>
                  <Accordion.Body>
                  You don&apos;t even need to worry about purchasing games from us because everyone 
                  can access us for free. You may get all of our predictions for free by just 
                  visitig our website daily.
                  world&apos;s top football prediction website, We work very hard to ensure that our users 
                  win their games, thus we are constantly updating our forecasts.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
            <Accordion>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Top 10 Football Prediction Site</Accordion.Header>
                  <Accordion.Body>
                  We are among the top 10 football prediction sites thanks to a variety of variables. 
                  Among these elements are: 1. We Provide Free Football Predictions: We do not have any 
                  interest in selling games that are being played between two clubs that are out to win 
                  at any costs, thus our predictions are free and there are no hidden fees. But we only 
                  make accurate forecasts that always turn out to be correct and appear to be fixed games. 
                  2. We Offer Accurate Predictions: Another aspect that propelled us into the top 10 football 
                  prediction sites is the accuracy of our predictions. We always take care to choose our advice 
                  wisely, and it has been effective. 
                  3. You can see all of our free forecasts even if you don&apos;t join up because we don&apos;t impose 
                  any restrictions on our users. You can still get our forecasts for free even if this is 
                  your first visit to our page. 
                  4. We have a team of experienced bettors: Having a strong team behind you can propel your 
                  company to the top, thus we collaborate with the best bettors in the sport betting industry. 
                  in order to provide our users with the accurate winning forecasts they deserve.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Accurate Football Prediction Website</Accordion.Header>
                  <Accordion.Body>
                    Before making any forecasts, we do a lot of research and take many different elements 
                    into account. We then use a variety of accurate and dependable AI APIs to make our 
                    predictions. We have a ton of testimonials on both our Facebook page and our prior 
                    victories. On our prediction page, you may access the games from yesterday and judge 
                    for yourself. Why don&apos;t you join us today to take advantage of all of our Free and 
                    Accurate Football Predictions? We are the Best Football Prediction Site in the World, 
                    and we also offer Free Football Prediction on our Facebook page every week. We also 
                    post free football predictions on our Twitter page every week, which is why people 
                    refer to us as the website that correctly predicts football games.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
           </Container>

           <br /><br />

           <h1 style={{textAlign:'center',marginBottom:'20px'}}>Match Prewiew</h1>

           <Container>
            
            <Row>

              {Prev?.slice(0,6).map((data,i)=>(
           <Col md={6} style={{marginBottom:'20px'}} key={i}>
            <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{data?.teams} <br /> {moment(data?.createdAt).format("DD-MM-YYYY")}</Accordion.Header>
                  <Accordion.Body>
                      <p className="card-text">
                        {data?.text}
                      </p>
                      <p className="card-text">
                        {data?.text2}
                      </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
             ))}

            </Row>
           </Container>

          <Footer/>

      </div>
      
      

    </React.Fragment>
  )
}

export default Home

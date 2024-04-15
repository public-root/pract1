import React from 'react'
import './PoliceMain.css'
import Navbar from '../../components/Navbar/Navbar'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/police.png'


export default function PoliceMain() {
  return (
    <>
     <Navbar/>
     <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Police</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/police-complaint">Police Complaint</a></p></div>
          <div className="box"><p><a href="/zero-fir">Zero FIR</a></p></div>
          <div className="box"><p><a href="/fir">FIR</a></p></div>
          <div className="box"><p><a href="/list-of-cognizable-offence">List Of Cognizable Offences</a></p></div>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/violence-at-home.png'


export default function VoilenceAtHome() {
  return (
   <>
   <Navbar/>
    <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Voilence at</h1>
            <h1>Home</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/taking-action-against-voilence-at-home">Taking Action Against Voilence</a></p></div>
          <div className="box"><p><a href="/dowry-harrsment">Dowry Harassment</a></p></div>
          <div className="box"><p><a href="/domestic-voilence">Domestic Voilence</a></p></div>
          <div className="box"><p><a href="/cruelty">Cruelty</a></p></div>
        </div>
      </section>
   </>
  )
}

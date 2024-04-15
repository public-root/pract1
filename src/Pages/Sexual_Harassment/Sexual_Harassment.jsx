import React from 'react'
import './Sexual-Harassment.css'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/sexual-harassment.png'
import Navbar from '../../components/Navbar/Navbar'

export default function Sexual_Harassment() {
  return (
    <>
    <Navbar/>
      <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Sexual</h1>
            <h1>Harassment</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/rape">Rape</a></p></div>
          <div className="box"><p><a href="/what-you-should-know-about-sexual-harassment">What You Should Know About Sexual Harassment</a></p></div>
          <div className="box"><p><a href="/sexual-harassment-topic">Sexual Harassment</a></p></div>
          <div className="box"><p><a href="">Eve-Teasing</a></p></div>
        </div>
        <div className="five-box">
          <div className="box"><p><a href="/molestation">Molestation</a></p></div>
          <div className="box"><p><a href="/stalking">Stalking</a></p></div>
          <div className="box"><p><a href="">Disrobing A Women</a></p></div>
          <div className="box"><p><a href="">Voyeurism</a></p></div>
          <div className="box"><p><a href="">Sexual Harassment at Workplace</a></p></div>
        </div>
      </section>
    </>
  )
}

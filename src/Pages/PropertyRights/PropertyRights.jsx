import React from 'react'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/property-rights.png'
import Navbar from '../../components/Navbar/Navbar'

export default function PropertyRights() {
  return (
    <>
        <Navbar/>
        <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Property Rights</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/stridhan">Stridhan</a></p></div>
          <div className="box"><p><a href="/hindu-inhertance">Hindu Inheritence</a></p></div>
          <div className="box"><p><a href="/mutation">Mutation</a></p></div>
        </div>
      </section>
    </>
  )
}

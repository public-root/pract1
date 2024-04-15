import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/child-related.png'

export default function ChildRelated() {
  return (
   <>
        <Navbar/>
        <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Child</h1>
            <h1>Related</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/maternity-benefit">Maternity</a></p></div>
          <div className="box"><p><a href="/abortion">Abortion</a></p></div>
          <div className="box"><p><a href="/surrogacy">Surrogacy</a></p></div>
        </div>
      </section>
   </>
  )
}

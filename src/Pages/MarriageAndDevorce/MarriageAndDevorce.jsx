import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import topic_bg from '../../assets/card/topic-bg-img.png'
import img1 from '../../assets/card/marriage-divorce.png'

export default function MarriageAndDevorce() {
  return (
    <>
        <Navbar/>
        <section className="hero">
        <div className="hero-div-main">
          <div className="text">
            <h1>Marriage And</h1>
            <h1>Divorce</h1>
          </div>
          <div className="imgs">
            <img className='back' src={topic_bg} alt="bg" />
            <img className='middle' src={img1} alt="img" />
          </div>
        </div>
      </section>
      <section className="topics">
        <div className="four-box">
          <div className="box"><p><a href="/hindu-marriage">Hindu Marriage</a></p></div>
          <div className="box"><p><a href="/hindu-divorce">Hindu Divorce</a></p></div>
          <div className="box"><p><a href="/hindu-seperation">Hindu Seperation</a></p></div>
          <div className="box"><p><a href="/hindu-maintenence">Hindu Maintanence</a></p></div>
        </div>
      </section>
    </>
  )
}

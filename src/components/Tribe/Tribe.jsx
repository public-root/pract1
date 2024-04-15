import React from 'react'
import "./Tribe.css"
import plt_logo from '../../assets/pink-legal-tribe-logo.png'
import plt_img from '../../assets/pink-legal-tribe-final.png'


export default function Tribe() {
  return (
    <>
      <section className="home-plt">
        <div className="plt-1">
          <img src={plt_img} alt="plt_img" />
        </div>
        <div className="plt-2">
          <img src={plt_logo} alt="plt_logo" />
          <div className="line">
            <p>- Connect with a community of empowered women </p>
            <p>- Get our fortnightly newletter</p>
            <p>- Be the first to know about the latest updates on women’s laws</p>
          </div>
          <p>Are you still thinking? Join the tribe, <hr /> Are you still thinking? Join the tribe, </p>
          <button className="button-6">Join the Tribe</button>
        </div>
      </section>
    </>
  )
}

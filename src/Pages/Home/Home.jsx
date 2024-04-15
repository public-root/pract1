import React from 'react'
import './Home.css'
import Card from '../../components/Card/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/Pink legal Hero section.png'
import image2 from '../../assets/do-you-have-a-legal-query1.jpg'
import image3 from '../../assets/banner-2.jpg'
import image4 from '../../assets/lawyer-with-purpose.jpg'
import icon1 from '../../assets/icon-1.png'
import icon2 from '../../assets/icon-2.png'
import icon3 from '../../assets/icon-3.png'
import equality from '../../assets/equality-logo.png'
import plt_img from '../../assets/pink-legal-tribe-final.png'
import plt_logo from '../../assets/pink-legal-tribe-logo.png'

import lr_img1 from '../../assets/card/sexual-harassment.png'
import lr_img2 from '../../assets/card/police.png'
import lr_img3 from '../../assets/card/violence-at-home.png'
import lr_img4 from '../../assets/card/marriage-divorce.png'
import lr_img5 from '../../assets/card/property-rights.png'
import lr_img6 from '../../assets/card/child-related.png'
import lr_img7 from '../../assets/card/cyber-bullying.png'
import lr_img8 from '../../assets/card/quick-guide.png'
import Navbar from '../../components/Navbar/Navbar';

export default function home() {
  return (
    <>
      <Navbar/>
      <section className='hero'>
        <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={false} transitionTime={400} interval={5000} showThumbs={false} showStatus={false}>
          <div className='banner-div'>
              <img className='hero-carousel-img' src={image1} alt='img' />
              <div className="img1">
                <h1>Speak up,</h1>
                <h1>be free.</h1>
                <p>Making legal awareness and mental health support accessible to women pro bano.</p>
                <button class="button-1" role="button">Sign Up</button>
              </div>
          </div>
          <div className='banner-div'>
              <img className='hero-carousel-img' src={image2} alt='img' />
              <div className="img2">
                <h1>Do You Have A LEGAL QUERY</h1>
                <div className="text2">
                  <h2>Do You Wish To Connect To A</h2>
                  <h2>Lawyer And Take Legal Action</h2>
                </div>
                <buttton className="button-2"><a href="/legal-services">Click Here</a></buttton>
                <img src={equality} alt="equality-logo" />
              </div>
          </div>
          <div className='banner-div'>
              <img className='hero-carousel-img' src={image3} alt='img' />
              <div className="img3">
                <h1>Know All Your Legal Rights</h1>
                <h1>With Just A Click</h1>
                <button className="button-3"><a href="/topics">Click Here</a></button>
              </div>
          </div>
          <div className='banner-div'>
              <img className='hero-carousel-img' src={image4} alt='img' />
              <div className="img4">
                <h2>ARE YOU  A LAWYER WITH A PURPOSE</h2>
                <p>Do You Wish To Take Up Cases For</p>
                <h1>WOMEN'S RIGHTS</h1>
                <h3>(Paid And Pro-Bono)?</h3>
                <button className="button-4"><a href="/legal-services">Sign Up With Us</a></button>
              </div>
          </div>
        </Carousel>
      </section>
      <section className="home-plw">
        <h2>How Medona Works</h2>
        <div className="plw-container">
          <div className="plw-content">
            <img src={icon1} alt="icon1" />
            <p className="plw-content-txt">We explain your rights in a simple manner</p>
          </div>
          <div className="plw-content">
            <img src={icon2} alt="icon2" />
            <p className="plw-content-txt">We help you if you still have a question</p>
          </div>
          <div className="plw-content">
            <img src={icon3} alt="icon3" />
            <p className="plw-content-txt">We gather all women-related laws</p>
          </div>
        </div>
      </section>
      <section className='home-kylr'>
        <h1>Know Your Legal Rights</h1>
        <p className='kylr-para'>Browse through women-related laws organised under different topic headings.</p>
        <div className="home-div-kylr">
          <div className="row-1">
            <Card img={lr_img1} txt1={"Sexual Harassment"} color={"#c84acc9e"}  link={"/sexual-harassment"} />
            <Card img={lr_img2} txt1={"Police"} color={"#8b51d4"}  link={"/police-main"} />
            <Card img={lr_img3} txt1={"Voilence at Home"} color={"#ff262f"} link={"/voilence-at-home"}  />
            <Card img={lr_img4} txt1={"Marriage and Divorce"} color={"#2f7a9a63"} link={"/marriage-and-divorce"}  />
          </div>
          <div className="row-2">
            <Card img={lr_img5} txt1={"Property Rights"} color={"#dc398094"} link={"/property-rights"}  />
            <Card img={lr_img6} txt1={"Child Related"} color={"#f9bb5fdb"}  link={"/child-related"} />
            <Card img={lr_img7} txt1={"Cyber Bullying"} color={"#5558f3b5"} link={"/legal-services"}  />
            <Card img={lr_img8} txt1={"Quick Guide"} color={"#bcd5d1"} link={"/legal-services"}  />
          </div>
          <button className="button-5"><a href="/topics">View More</a></button>
        </div>
      </section>
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

import React from 'react'
import Card from "../../components/Card/Card"
import "./Topics.css"

import lr_img1 from '../../assets/card/sexual-harassment.png'
import lr_img2 from '../../assets/card/police.png'
import lr_img3 from '../../assets/card/violence-at-home.png'
import lr_img4 from '../../assets/card/marriage-divorce.png'
import lr_img5 from '../../assets/card/property-rights.png'
import lr_img6 from '../../assets/card/child-related.png'
import lr_img7 from '../../assets/card/cyber-bullying.png'
import lr_img8 from '../../assets/card/quick-guide.png'
import lr_img9 from '../../assets/card/Glossary.png'
import lr_img10 from '../../assets/card/lgbtq.png'
import Navbar from '../../components/Navbar/Navbar';


export default function Topics() {
  return (
    <>
        <Navbar/>
        <section className="topics">
          <div className="text">
            <h1 className="heading">Topics</h1>
            <p>Browse through women-related laws organised under different topic headings.</p>
          </div>
          <div className="cards">
            <div className="home-div-kylr">
          <div className="row-1">
            <Card img={lr_img1} txt1={"Sexual Harassment"} color={"#c84acc9e"} link={"/sexual-harassment"}  />
            <Card img={lr_img2} txt1={"Police"} color={"#8b51d4"} link={"/police-main"}  />
            <Card img={lr_img3} txt1={"Voilence at Home"} color={"#ff262f"} link={"/voilence-at-home"}  />
            <Card img={lr_img4} txt1={"Marriage and Divorce"} color={"#2f7a9a63"}  link={"/marriage-and-divorce"} />
          </div>
          <div className="row-2">
            <Card img={lr_img5} txt1={"Property Rights"} color={"#dc398094"} link={"/property-rights"}   />
            <Card img={lr_img6} txt1={"Child Related"} color={"#f9bb5fdb"} link={"child-related"}  />
            <Card img={lr_img7} txt1={"Cyber Bullying"} color={"#5558f3b5"}  link={"legal-services"} />
            <Card img={lr_img8} txt1={"Quick Guide"} color={"#bcd5d1"} link={"legal-services"}  />
          </div>
          <div className="row-2">
            <Card img={lr_img9} txt1={"Glossary Rights"} color={"#667467"}  link={"legal-services"}  />
          </div>
        </div>
          </div>
        </section>
    </>
  )
}

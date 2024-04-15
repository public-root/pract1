import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CongnizableOffence.css'
import hero_img from '../../assets/faq-banner.png'
import Accord from '../../components/Accordion/Accord'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import SimilarTopicsPolice from '../../components/Similar_Topic/SimilarTopicsPolice'
import Tribe from '../../components/Tribe/Tribe'

export default function CongnizableOffence() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>List Of Cognizable</h1>
                <h1> Offences </h1>
            </div>
        </section>
        <section className="list">
            <div className="list-div">
                <p>
                Cognizable offences are offences where the police can arrest without any warrant. Mostly, these crimes are serious in nature and punishable with more than 3 years in jail. The list of cognizable offences is given in the First Schedule of the Indian Penal Code. Following is the list of cognizable offences which are relevant to women:
                </p>
                <div className="order-list">
                    <ol>
                        <li>Murder</li>
                        <li>Attempt to murder</li>
                        <li>Rape</li>
                        <li>Sexual Harassment</li>
                        <li>Molestation</li>
                        <li>Stalking</li>
                        <li>Disrobing a women</li>
                        <li>Voyeurism</li>
                        <li>Dowry Death</li>
                        <li>Cruelty by husband of his relatives</li>
                    </ol>
                </div>
            </div>
        </section>
        <SimilarTopicsPolice/>
        <Tribe/>
    </>
  )
}

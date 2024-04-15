import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_img from '../../assets/faq-banner.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import Similar_Topic from '../../components/Similar_Topic/Similar_Topic';
import Tribe from '../../components/Tribe/Tribe';
import "./Molestation.css"


export default function Molestation() {
  return (
    <>
        <Navbar/>
        <section className="rape-hero">
            <img src={hero_img} alt="" className="hero-bg" />
            <div className="heading">
                <h1>Molestation</h1>
                <p>Section 354, Indian Penal Code</p>
            </div>
        </section>
        <section className="accordian">
            <div className="head">Meaning</div>
            <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              1. Which acts amount to molestation under Indian law?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <ul>
                    <p>- Physical contact or force with sexual intent, for example, squeezing your body parts like breasts or buttocks, or touching you anywhere on your body.</p>
                    <p>- Threatening gestures which put you in fear of your safety</p>
                        <p>For examples of molestation sexual harassment, see "What You Should Know About <a href="../sexual-harassment/sexual-harassment.html" class="link-clr"> Sexual Harassment</a>".</p>

                </ul>
            </div>
            </AccordionDetails>
        </Accordion>
        <div className="head">Punishment</div>
        <Accordion style={{background:"#fafafa", border:"1rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"70rem",margin:"auto"}} >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleTwoToneIcon style={{color:"#b22e61"}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              2. What is the punishment for molestation under Indian law?
            </AccordionSummary>
            <hr style={{color:"black",border:"0.1px solid #b22e61",height:".1px"}}/>
            <AccordionDetails>
            <div class="summary">
                <p>Molestation is punishable with a minimum of 1 year to a maximum of 5 years imprisonment and fine.</p>
                <p><strong><u>Nature of offence:</u></strong></p>
                <table style={{width:"50%"}}>
                    <tbody><tr>
                        <th><a href="../police/list-of-cognizable-offences.html" class="link-clr" style={{borderBottom:"none"}}>Cognizable</a></th>
                        <th><a href="../../glossary.html" class="link-clr" style={{borderBottom: "none"}}>Bailable</a></th>
                    </tr>
                </tbody></table><br/>
                <p><strong><u> COMPLAINT AGAINST MOLESTATION:</u></strong></p>
                <p>Please see "What You Should Know About <a href="../sexual-harassment/sexual-harassment.html" class="link-clr"> Sexual Harassment</a>" and <a href="../police/police-complaint.html" class="link-clr"> Police Complaint</a>.</p>
            </div>
            </AccordionDetails>
        </Accordion>
        </section>
        <Similar_Topic/>
        <Tribe/>
       
    </>
  )
}
